const ApiClient = {
    async get(endpoint) {
        try {
            const response = await fetch(endpoint);
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
            return { success: false, message: "Connection failed." };
        }
    },
    async put(endpoint, data) {
        try {
            const response = await fetch(endpoint, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            return { success: false };
        }
    },
    async delete(endpoint, data) {
        try {
            const response = await fetch(endpoint, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            return { success: false };
        }
    }
};