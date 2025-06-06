const express = require('express');

const router = express.Router();

// router.get('/', (req, res) => {
//     const name = req.body.name;
//     if (!name) {
//         res.redirect('/');
//     }
// });

router.post('/', (req, res) => {
    const name = req.body.name;

    if (name) {
        return res.status(200).send(`Welcome: ${name}`);
    }

    res.status(401).send('Please provide credentials');
});

module.exports = router;
