module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, password } = req.body;

    const testUsers = [
        { email: 'admin@admin.com', password: '123', name: 'Administrador', role: 'admin' },
        { email: 'vendedor@vendedor.com', password: '123', name: 'Vendedor Alpha', role: 'vendedor' }
    ];

    const user = testUsers.find(u => u.email === email && u.password === password);

    if (user) {
        return res.status(200).json({
            success: true,
            user: {
                name: user.name,
                role: user.role
            }
        });
    }

    return res.status(401).json({
        success: false,
        message: 'E-mail ou senha incorretos!'
    });
};