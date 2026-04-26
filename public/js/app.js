const App = {
    state: {
        currentUser: JSON.parse(localStorage.getItem('user')) || null,
        currentView: 'menu',
        currentCategoryId: null,
        currentProfileId: null,
        isMeioExpanded: false,
        content: null,
        adminUsers: []
    },

    async init() {
        if (this.state.currentUser && this.state.currentUser.status === 'approved') {
            await this.loadContent();
        }
        UI.render();
    },

    async login(email, password) {
        const response = await ApiClient.post('/api/auth', { action: 'login', email, password });
        if (response.success) {
            // Salva o usuário e o token
            const userWithToken = { ...response.user, token: response.token };
            this.state.currentUser = userWithToken;
            localStorage.setItem('user', JSON.stringify(userWithToken));
            
            if (userWithToken.status === 'approved') {
                await this.loadContent();
                this.navigateToMenu(); // MUDA PARA A TELA DE MENU
            } else {
                UI.render(); // Mostrará a tela de "Acesso em Análise"
            }
            return { success: true };
        }
        return { success: false, message: response.message };
    },

    async register(name, email, password) {
        return await ApiClient.post('/api/auth', { action: 'register', name, email, password });
    },

    logout() {
        this.state.currentUser = null;
        localStorage.removeItem('user');
        window.location.reload();
    },

    async loadContent() {
        const response = await ApiClient.get('/api/content');
        if (response && response.success) {
            this.state.content = response.data;
        }
    },

    async loadAdminUsers() {
        const response = await ApiClient.get('/api/users');
        if (response && response.success) {
            this.state.adminUsers = response.data;
            UI.render();
        }
    },

    async updateAdminUser(email, role, status) {
        await ApiClient.put('/api/users', { email, role, status });
        await this.loadAdminUsers();
    },

    async deleteAdminUser(email) {
        await ApiClient.delete('/api/users', { email });
        await this.loadAdminUsers();
    },

    navigateToMenu() {
        this.state.currentView = 'menu';
        this.state.isMeioExpanded = false;
        this.state.currentProfileId = null;
        this.state.currentCategoryId = null;
        UI.render();
    },

    navigateToAdmin() {
        this.state.currentView = 'admin';
        this.loadAdminUsers();
    },

    toggleMeio(e) {
        if(e) e.stopPropagation();
        this.state.isMeioExpanded = !this.state.isMeioExpanded;
        this.state.currentView = 'category';
        this.state.currentCategoryId = 'meio';
        this.state.currentProfileId = null;
        UI.render();
    },

    navigateToCategory(id) {
        this.state.currentView = 'category';
        this.state.currentCategoryId = id;
        this.state.currentProfileId = null;
        this.state.isMeioExpanded = (id === 'meio');
        window.scrollTo(0, 0);
        UI.render();
    },

    navigateToProfile(id) {
        this.state.currentProfileId = id;
        this.state.currentView = 'category';
        this.state.currentCategoryId = 'meio';
        this.state.isMeioExpanded = true;
        window.scrollTo(0, 0);
        UI.render();
    }
};

// FUNÇÃO GLOBAL PARA TRATAR O BOTÃO ENTRAR
window.handleAuthSubmit = async (event, action) => {
    event.preventDefault(); // IMPORTANTE: Impede o "?" na URL e o recarregamento
    
    const messageElement = document.getElementById('authMessage');
    if(messageElement) messageElement.style.display = 'none';

    if (action === 'login') {
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;
        const res = await App.login(email, pass);
        if (!res.success && messageElement) {
            messageElement.style.display = 'block';
            messageElement.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
            messageElement.style.color = '#ef4444';
            messageElement.textContent = res.message;
        }
    } else {
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const pass = document.getElementById('regPassword').value;
        const res = await App.register(name, email, pass);
        if (res.success) {
            alert('Solicitação enviada! Aguarde aprovação.');
            window.toggleAuthView('login');
        } else if (messageElement) {
            messageElement.style.display = 'block';
            messageElement.textContent = res.message;
        }
    }
};

window.toggleAuthView = (view) => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    if (view === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
};