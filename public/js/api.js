const ApiClient = {
    async get(endpoint) {
        try {
            const response = await fetch(endpoint, { cache: 'no-store' });
            return await response.json();
        } catch (error) {
            return { success: false };
        }
    },
    async post(endpoint, data) {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            return { success: false };
        }
    },
    async put(endpoint, data) {
        return await fetch(endpoint, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(r => r.json());
    },
    async delete(endpoint, data) {
        return await fetch(endpoint, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(r => r.json());
    }
};