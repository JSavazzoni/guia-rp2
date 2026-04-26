const ApiClient = {
    async get(endpoint) {
        try {
            const response = await fetch(endpoint);
            return await response.json();
        } catch (error) {
            console.error("Erro na comunicação GET:", error);
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
            console.error("Erro na comunicação POST:", error);
            return { success: false, message: "Erro de conexão com o servidor." };
        }
    }
};