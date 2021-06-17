require('dotenv').config();

const express = require('express');
const cors = require('cors');
const initializeFirebase = require('./firebase');
const { responseMiddleware } = require('./middlewares/response.middleware');

initializeFirebase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/index');
routes(app);
app.use(responseMiddleware);

const port = 3050;
app.listen(process.env.PORT || port, () => {
    console.log(`started on port ${port}`);
});

exports.app = app;