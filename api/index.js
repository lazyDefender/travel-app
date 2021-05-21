require('dotenv').config()

const express = require('express')
const cors = require('cors');
const initializeFirebase = require('./firebase');

initializeFirebase();

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/index');
routes(app);

const port = 3050;
app.listen(process.env.PORT || port, () => {
    console.log('started!')
});

exports.app = app;