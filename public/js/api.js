const ApiClient = {
    async request(endpoint, options = {}) {
        const userStorage = JSON.parse(localStorage.getItem('user'));
        const token = userStorage?.token;

        const headers = {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }), // Envia o token para o servidor
            ...options.headers
        };

        try {
            const response = await fetch(endpoint, { ...options, headers });
            
            // Se o token estiver expirado ou inválido, desloga
            if (response.status === 401 || response.status === 403) {
                if (!endpoint.includes('/auth')) {
                    localStorage.removeItem('user');
                    window.location.reload();
                }
            }
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Erro de conexão.' };
        }
    },

    async get(endpoint) { return this.request(endpoint, { method: 'GET' }); },
    async post(endpoint, data) { return this.request(endpoint, { method: 'POST', body: JSON.stringify(data) }); },
    async put(endpoint, data) { return this.request(endpoint, { method: 'PUT', body: JSON.stringify(data) }); },
    async delete(endpoint, data) { return this.request(endpoint, { method: 'DELETE', body: JSON.stringify(data) }); }
};