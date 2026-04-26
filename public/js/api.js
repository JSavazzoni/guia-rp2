const ApiClient = {
    async get(endpoint) {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("GET Error:", error);
            return { success: false, message: error.message };
        }
    },

    async post(endpoint, data) {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const text = await response.text();
            try {
                return JSON.parse(text);
            } catch (e) {
                return { success: false, message: "Erro na resposta do servidor (Não é JSON válido)." };
            }
        } catch (error) {
            console.error("POST Error:", error);
            return { success: false, message: "Falha de conexão com o Banco de Dados." };
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