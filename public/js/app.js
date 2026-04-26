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
            const userData = { ...response.user, token: response.token };
            this.state.currentUser = userData;
            localStorage.setItem('user', JSON.stringify(userData));
            
            if (userData.status === 'approved') {
                await this.loadContent();
                this.navigateToMenu();
            } else {
                UI.render();
            }
            return { success: true };
        }
        return { success: false, message: response.message };
    },

    async register(name, email, password) {
        return await ApiClient.post('/api/auth', { action: 'register', name, email, password });
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

    logout() {
        localStorage.removeItem('user');
        window.location.reload();
    },

    navigateToMenu() {
        this.state.currentView = 'menu';
        this.state.currentCategoryId = null;
        this.state.currentProfileId = null;
        UI.render();
    },

    navigateToAdmin() {
        this.state.currentView = 'admin';
        this.loadAdminUsers();
    },

    navigateToCategory(id) {
        this.state.currentView = 'category';
        this.state.currentCategoryId = id;
        this.state.currentProfileId = null;
        window.scrollTo(0, 0);
        UI.render();
    },

    navigateToProfile(id) {
        this.state.currentProfileId = id;
        this.state.currentView = 'category';
        this.state.currentCategoryId = 'meio';
        window.scrollTo(0, 0);
        UI.render();
    },

    toggleMeio(e) {
        if(e) e.stopPropagation();
        this.state.isMeioExpanded = !this.state.isMeioExpanded;
        UI.render();
    }
};