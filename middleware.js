const User = require('./model');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try {
        if (!req.cookies || !req.cookies.jwtoken) {
            throw new Error('No token provided');
        }

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) {
            throw new Error('User not found');
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    } catch (error) {
        console.error(error);
        res.status(400).send('Invalid token');
    }
};

module.exports = authenticate;
