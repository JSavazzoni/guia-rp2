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

    navigateToMenu() {
        this.state.currentView = 'menu';
        this.state.currentCategoryId = null;
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
        window.scrollTo(0, 0);
        UI.render();
    },

    toggleMeio(e) {
        if(e) e.stopPropagation();
        this.state.isMeioExpanded = !this.state.isMeioExpanded;
        UI.render();
    },

    logout() {
        localStorage.removeItem('user');
        window.location.reload();
    }
};