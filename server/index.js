require('dotenv').config();
const express = require('express');
const models = require('./models/models')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const fileUpload = require("express-fileupload");
const errorHandler = require('./middleware/ErrorHandler')
const { Server } = require('socket.io')
const PORT = process.env.PORT || 5000;
const app = express();
const http = require('http');
const path = require("path");

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname)));
app.use(fileUpload({}));
app.use('/api', router)

//middleware
app.use(errorHandler)
  
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        io.on('connection', (socket) => {
            console.log(`User connected ${socket.id}`)

            socket.on('disconnect', () => {
                console.log(`User disconneted ${socket.id}`)
            })
        })
        server.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

start()
