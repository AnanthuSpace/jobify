const jwt = require("jsonwebtoken")

dotenv.config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
const accessTokenExpire = process.env.ACCESS_TOKEN_EXPIRATION;
const refreshTokenExpire = process.env.REFRESH_TOKEN_EXPIRATION;


export const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, accessTokenSecret, { expiresIn: accessTokenExpire });
}

export const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, refreshTokenSecret, { expiresIn: refreshTokenExpire });
}

export const verifyToken = (req, res, next) => {
    const verificationHeader = req.headers.authorization;
    if (!verificationHeader) {
        return res.status(401).json({ message: 'Access denied. Access token not valid' });
    }

    const accessToken = verificationHeader.split(' ')[1];
    if (!accessToken) {
        return res.status(401).json({ message: 'Access denied. Access token not valid' });
    }

    jwt.verify(accessToken, accessTokenSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Access denied. Access token not valid' });
        } else {
            (req).id = (decoded).id;
            next();
        }
    });
}