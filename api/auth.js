const clientPromise = require('./database');
const crypto = require('crypto');

// Cria um Hash seguro para a senha (nunca salvar em texto plano no BD)
const hashPassword = (password) => {
    return crypto.scryptSync(password, 'santa-group-salt', 64).toString('hex');
};

module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end();

    try {
        const client = await clientPromise;
        const db = client.db("SG_DATABASE");
        const usersCollection = db.collection("users");

        const { action, email, password, name } = req.body;

        if (action === 'register') {
            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ success: false, message: 'Email já cadastrado em nossa base.' });
            }

            // O primeiro usuário a se cadastrar no banco vazio ganha cargo de admin
            const isFirstUser = await usersCollection.countDocuments() === 0;

            const newUser = {
                email,
                password: hashPassword(password), // Salva a senha com hash
                name: name.toUpperCase(),
                role: isFirstUser ? 'admin' : 'vendedor',
                status: isFirstUser ? 'approved' : 'pending', // Admins já entram aprovados
                createdAt: new Date()
            };

            await usersCollection.insertOne(newUser);
            return res.status(201).json({ 
                success: true, 
                message: isFirstUser ? 'Conta Administrador criada com sucesso!' : 'Solicitação enviada! Aguarde a aprovação do Administrador.' 
            });
        }

        if (action === 'login') {
            // Busca o usuário com o email e o hash correspondente da senha
            const user = await usersCollection.findOne({ email, password: hashPassword(password) });

            if (!user) return res.status(401).json({ success: false, message: 'E-mail ou senha inválidos.' });
            if (user.status === 'pending') return res.status(403).json({ success: false, message: 'Sua conta está em análise pelo Administrador.' });
            if (user.status === 'rejected') return res.status(403).json({ success: false, message: 'Seu acesso foi revogado pelo Administrador.' });

            return res.status(200).json({
                success: true,
                user: { id: user._id, name: user.name, email: user.email, role: user.role }
            });
        }

        return res.status(400).json({ success: false, message: 'Ação inválida solicitada à API.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Erro interno no servidor de banco de dados.' });
    }
};