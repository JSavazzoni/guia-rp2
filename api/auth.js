const clientPromise = require('./database');
const crypto = require('crypto');
const { generateToken } = require('./_security');

const hashPassword = (password) => {
    return crypto.scryptSync(password, 'santa-group-salt', 64).toString('hex');
};

module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end();

    try {
        const client = await clientPromise;
        const db = client.db("SG_DATABASE");
        const usersCollection = db.collection("users");

        const { action, password, name } = req.body;
        const email = req.body.email.toLowerCase();

        if (action === 'register') {
            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ success: false, message: 'Email já cadastrado.' });
            }

            const isFirstUser = await usersCollection.countDocuments() === 0;

            const newUser = {
                email,
                password: hashPassword(password),
                name: name.toUpperCase(),
                role: isFirstUser ? 'admin' : 'vendedor',
                status: isFirstUser ? 'approved' : 'pending',
                createdAt: new Date()
            };

            await usersCollection.insertOne(newUser);
            return res.status(201).json({ success: true });
        }

        if (action === 'login') {
            const user = await usersCollection.findOne({ email, password: hashPassword(password) });

            if (!user) return res.status(401).json({ success: false, message: 'Credenciais inválidas.' });
            
            const token = generateToken(user);

            return res.status(200).json({
                success: true,
                token,
                user: { 
                    id: user._id, 
                    name: user.name, 
                    email: user.email, 
                    role: user.role, 
                    status: user.status 
                }
            });
        }

        return res.status(400).end();
    } catch (error) {
        return res.status(500).json({ success: false });
    }
};