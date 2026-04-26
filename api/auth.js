module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).send();
    const { email, password } = req.body;

    // LOGIN TESTE - Pode mudar depois
    if (password === '123') {
        return res.json({
            success: true,
            user: {
                name: email.split('@')[0].toUpperCase(),
                role: email.includes('admin') ? 'admin' : 'vendedor'
            }
        });
    }

    res.status(401).json({ success: false, message: 'Senha incorreta!' });
};