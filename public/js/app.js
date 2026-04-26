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
        // Só tenta carregar conteúdo se o usuário já estiver aprovado
        if (this.state.currentUser && this.state.currentUser.status === 'approved') {
            await this.loadContent();
        }
        UI.render();
    },

    async login(email, password) {
        const response = await ApiClient.post('/api/auth', { action: 'login', email, password });
        if (response.success) {
            // Salva o token e o status retornados pelo servidor
            const userWithToken = { ...response.user, token: response.token };
            this.state.currentUser = userWithToken;
            localStorage.setItem('user', JSON.stringify(userWithToken));
            
            // VERIFICAÇÃO DE BLOQUEIO: Só entra no menu se estiver aprovado
            if (userWithToken.status === 'approved') {
                await this.loadContent();
                this.navigateToMenu();
            } else {
                UI.render(); // Vai mostrar a tela de "Aguardando Aprovação"
            }
            return { success: true };
        }
        return { success: false, message: response.message };
    },

    async loadContent() {
        const response = await ApiClient.get('/api/content');
        if (response && response.success) {
            this.state.content = response.data;
            UI.render();
        }
    },

    // ... Outras funções (navigateToMenu, logout, etc) permanecem as mesmas
    logout() {
        this.state.currentUser = null;
        localStorage.removeItem('user');
        window.location.reload();
    },

    navigateToMenu() {
        this.state.currentView = 'menu';
        this.state.currentCategoryId = null;
        UI.render();
    }
};