const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'chave-secreta-padrao-santa-group-2026';

function verificarAcesso(req) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    const token = authHeader.split(' ')[1];

    try {
        const usuarioDecodificado = jwt.verify(token, SECRET);
        return usuarioDecodificado;
    } catch (err) {
        return null;
    }
}

function gerarToken(usuario) {
    return jwt.sign(
        { email: usuario.email, role: usuario.role, name: usuario.name }, 
        SECRET, 
        { expiresIn: '12h' }
    );
}

module.exports = { verificarAcesso, gerarToken };