// import express
const express = require('express');
// used to access .env variables
require('dotenv').config();
// import cors
const cors = require('cors');

const port = process.env.SERVER_PORT;
const app = express();

const corsOptions ={
    origin: [`http://${process.env.DB_HOST}:${process.env.SERVER_PORT}`,
    `http://${process.env.DB_HOST}:${process.env.FRONTEND_PORT}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
};
app.use(cors(corsOptions));

// Use JSON and encode URLs
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// GET route for base URL
app.get('/', (req, res) => {
    res.send('Welcome to Slrup Ramen Restaurant Application!');
})


// Run server
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
})

module.exports =app;
