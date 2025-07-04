const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());
app.use(express.static('./public'));

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks')        - get all tasks
// app.post('/api/v1/tasks')       - create a new task
// app.get('/api/v1/tasks/:id')    - get single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id') - delete task

// 404 handler
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.port || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(
            port,
            console.log(`Server is running on port http://localhost:${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
