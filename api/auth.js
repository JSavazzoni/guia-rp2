module.exports = async (req, res) => {
    // Permite apenas requisições POST
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Método não permitido' });
    }

    const { email, password } = req.body;

    if (password === '123') {
        let role = 'vendedor';
        let name = 'Vendedor Alpha';

        if (email.toLowerCase().includes('admin')) {
            role = 'admin';
            name = 'Administrador';
        }

        return res.status(200).json({
            success: true,
            user: { name, role, email }
        });
    }

    return res.status(401).json({ success: false, message: 'Senha incorreta ou acesso negado!' });
};