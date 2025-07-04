const mongooese = require('mongoose');

const connectDB = (url) => {
    return mongooese.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
