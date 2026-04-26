const App = {
    state: {
        currentUser: JSON.parse(localStorage.getItem('user')) || null,
        currentView: 'menu',
        currentCategoryId: null,
        currentProfileId: null,
        isMeioExpanded: false,
        content: null
    },

    async init() {
        if (this.state.currentUser) {
            await this.loadContent();
        }
        UI.render();
    },

    async login(email, password) {
        const response = await ApiClient.post('/api/auth', { email, password });
        if (response.success) {
            this.state.currentUser = response.user;
            localStorage.setItem('user', JSON.stringify(response.user));
            await this.loadContent();
            this.navigateToMenu();
            return { success: true };
        }
        return { success: false, message: response.message || "Erro no Login" };
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
        } else {
            console.error("Falha ao carregar conteúdo da API");
        }
    },

    navigateToMenu() {
        this.state.currentView = 'menu';
        this.state.isMeioExpanded = false;
        this.state.currentProfileId = null;
        this.state.currentCategoryId = null;
        UI.render();
    },

    toggleMeio(e) {
        e.stopPropagation();
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