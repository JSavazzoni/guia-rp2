const clientPromise = require('./database');
const crypto = require('crypto');

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
                return res.status(400).json({ success: false, message: 'Email already registered.' });
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
            return res.status(201).json({ success: true, message: isFirstUser ? 'Admin created.' : 'Registration pending approval.' });
        }

        if (action === 'login') {
            const user = await usersCollection.findOne({ email, password: hashPassword(password) });

            if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials.' });
            if (user.status === 'pending') return res.status(403).json({ success: false, message: 'Account pending approval.' });
            if (user.status === 'rejected') return res.status(403).json({ success: false, message: 'Access denied.' });

            return res.status(200).json({
                success: true,
                user: { id: user._id, name: user.name, email: user.email, role: user.role }
            });
        }

        return res.status(400).json({ success: false, message: 'Invalid action.' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
};