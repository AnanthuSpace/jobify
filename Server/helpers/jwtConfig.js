const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const accessTokenExpire = process.env.ACCESS_TOKEN_EXPIRATION;


const generateAccessToken = (email) => {
    return jwt.sign({ email }, accessTokenSecret, { expiresIn: accessTokenExpire, algorithm: 'HS256' });
};


const verifyToken = (req, res, next) => {
    const verificationHeader = req.headers.authorization;
    if (!verificationHeader) {
        return res.status(401).json({ message: 'Access denied. Access token not valid' });
    }

    const accessToken = verificationHeader.split(' ')[1];
    if (!accessToken) {
        return res.status(401).json({ message: 'Access denied. Access token not valid' });
    }

    jwt.verify(accessToken, accessTokenSecret, { algorithms: ['HS256'] }, (err, decoded) => {

        if (err) {
            console.log('JWT Verify Error:', err);
            return res.status(401).json({ message: 'Access denied. Access token not valid' });
        } else {
            req.email = decoded.email;
            next();
        }
    });
};


module.exports = {
    generateAccessToken,
    verifyToken
};