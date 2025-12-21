import jwt from 'jsonwebtoken';

const jwtMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const payLoad = jwt.verify(token,'cacd7d1b31d5ce0776e23478143d19d3c088196d');
        req.userId = payLoad.userId;
    } catch (err) {
        return res.status(401).json({ message: 'Token is invalid' });
    }
    next();
    
}