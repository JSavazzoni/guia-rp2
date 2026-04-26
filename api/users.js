const clientPromise = require('./database');

module.exports = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("SG_DATABASE");
        const usersCollection = db.collection("users");

        if (req.method === 'GET') {
            const users = await usersCollection.find({}, { projection: { password: 0 } }).toArray();
            return res.status(200).json({ success: true, data: users });
        }

        if (req.method === 'PUT') {
            const { email, role, status } = req.body;
            await usersCollection.updateOne({ email }, { $set: { role, status } });
            return res.status(200).json({ success: true });
        }

        if (req.method === 'DELETE') {
            const { email } = req.body;
            await usersCollection.deleteOne({ email });
            return res.status(200).json({ success: true });
        }

        return res.status(405).end();
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
};