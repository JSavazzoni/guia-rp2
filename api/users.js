const clientPromise = require('./database');
const { verifyAccess } = require('./_security');

module.exports = async (req, res) => {
    const requester = verifyAccess(req);
    
    if (!requester || requester.role !== 'admin') {
        return res.status(403).json({ success: false });
    }

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
            await usersCollection.updateOne({ email: email.toLowerCase() }, { $set: { role, status } });
            return res.status(200).json({ success: true });
        }

        if (req.method === 'DELETE') {
            const { email } = req.body;
            await usersCollection.deleteOne({ email: email.toLowerCase() });
            return res.status(200).json({ success: true });
        }

        return res.status(405).end();
    } catch (error) {
        return res.status(500).json({ success: false });
    }
};