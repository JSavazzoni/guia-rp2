const ApiClient = {
    async request(endpoint, options = {}) {
        const user = JSON.parse(localStorage.getItem('user'));
        const headers = {
            'Content-Type': 'application/json',
            ...(user?.token && { 'Authorization': `Bearer ${user.token}` }),
            ...options.headers
        };
        try {
            const response = await fetch(endpoint, { ...options, headers });
            if ((response.status === 401 || response.status === 403) && !endpoint.includes('/auth')) {
                localStorage.removeItem('user');
                window.location.reload();
            }
            return await response.json();
        } catch (e) { return { success: false }; }
    },
    async get(url) { return this.request(url, { method: 'GET' }); },
    async post(url, data) { return this.request(url, { method: 'POST', body: JSON.stringify(data) }); },
    async put(url, data) { return this.request(url, { method: 'PUT', body: JSON.stringify(data) }); },
    async delete(url, data) { return this.request(url, { method: 'DELETE', body: JSON.stringify(data) }); }
};