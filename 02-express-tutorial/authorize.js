const authorize = (req, res, next) => {
    const { user } = req.query;

    if (user === 'john') {
        req.user = { name: 'john', id: 3 };
        next();
    } else {
        res.send(401).send('Unauthorized');
    }
};

module.exports = authorize;
