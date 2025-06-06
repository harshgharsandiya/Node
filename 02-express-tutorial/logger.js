const logger = (req, res, next) => {
    if (req.path.startsWith('/.well-known')) return next();

    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send('Testing');
    next();
};

module.exports = logger;
