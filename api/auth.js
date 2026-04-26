module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).send();
    const { email, password } = req.body;

    // LOGIN TESTE
    if (password === '123') {
        return res.json({
            success: true,
            user: {
                name: email.split('@')[0],
                role: email.includes('admin') ? 'admin' : 'vendedor'
            }
        });
    }

    res.json({ success: false, message: 'Senha incorreta!' });
};