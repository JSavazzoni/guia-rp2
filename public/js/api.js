// public/js/api.js
const ApiClient = {
    async get(endpoint) {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("Erro GET:", error);
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
            
            // Tenta ler o JSON. Se a Vercel retornar um erro de servidor (HTML), isso cai no catch
            const text = await response.text(); 
            try {
                return JSON.parse(text);
            } catch (e) {
                console.error("Resposta do servidor não foi um JSON:", text);
                return { success: false, message: "Erro 500: Verifique o log da Vercel." };
            }
            
        } catch (error) {
            console.error("Erro POST:", error);
            return { success: false, message: "Falha de conexão com a API." };
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