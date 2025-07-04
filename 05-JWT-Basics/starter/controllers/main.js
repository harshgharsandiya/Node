// check username, password in post(login) request
// if exist create new JWT
// send back to fron-end
// setup authentication so only the request with JWT can access the dasboard

const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
    const { username, password } = req.body;
    // mongoese validation
    // Joi package
    // check in the controller

    if (!username || !password) {
        throw new BadRequestError('Please provide email and password');
    }

    //just for demo, normally provided by DB!!!
    const id = new Date().getDate();

    // try to keep payload small, better experience for user
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    res.status(200).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Your authorized data: ${luckyNumber}`,
    });
};

module.exports = {
    login,
    dashboard,
};
