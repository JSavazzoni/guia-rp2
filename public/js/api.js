const ApiClient = {
    async request(endpoint, options = {}) {
        const userStorage = JSON.parse(localStorage.getItem('user'));
        const token = userStorage?.token;

        const headers = {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
            ...options.headers
        };

        try {
            const response = await fetch(endpoint, { ...options, headers });
            
            if (response.status === 401 || response.status === 403) {
                if (!endpoint.includes('/auth')) {
                    localStorage.removeItem('user');
                    window.location.reload();
                }
            }
            
            return await response.json();
        } catch (error) {
            return { success: false, message: 'Connection Error' };
        }
    },

    async get(endpoint) { return this.request(endpoint, { method: 'GET', cache: 'no-store' }); },
    async post(endpoint, data) { return this.request(endpoint, { method: 'POST', body: JSON.stringify(data) }); },
    async put(endpoint, data) { return this.request(endpoint, { method: 'PUT', body: JSON.stringify(data) }); },
    async delete(endpoint, data) { return this.request(endpoint, { method: 'DELETE', body: JSON.stringify(data) }); }
};