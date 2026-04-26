const ApiClient = {
    async get(endpoint) {
        try {
            // Adicionamos 'cache: no-store' para que os dados do banco sempre venham novos
            const response = await fetch(endpoint, { cache: 'no-store' }); 
            if (!response.ok) throw new Error(`Erro: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("GET Error:", error);
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