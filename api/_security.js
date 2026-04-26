const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
    throw new Error('JWT_SECRET is not defined');
}

function verifyAccess(req) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    const token = authHeader.split(' ')[1];

    try {
        return jwt.verify(token, SECRET);
    } catch (err) {
        return null;
    }
}

function generateToken(user) {
    return jwt.sign(
        { email: user.email, role: user.role, name: user.name, status: user.status }, 
        SECRET, 
        { expiresIn: '12h' }
    );
}

module.exports = { verifyAccess, generateToken };