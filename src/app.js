require('dotenv').config();
const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const { apiRouter, viewRouter} = require('./routes');
const { clientError, serverError } = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 8080);
app.use(cookieParser());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(join(__dirname, '..', 'public')));

app.use('/api/v1', apiRouter);
app.use(viewRouter);

app.use(clientError);
app.use(serverError);

module.exports = app;