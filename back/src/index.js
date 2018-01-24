require('dotenv').config();

const PORT = process.env.PORT || 3000;

const express = require('express');
const mw = require('./middleware');
const Auth = require('./Route/Auth');
const app = express();
const http = require('http');
const server = http.Server(app);

app.set('trust proxy');
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(mw.corsMiddleware);

app.use('/auth', Auth);

server.listen(PORT, () => {
  console.log(`Able to connect to ${PORT}`);
});

module.exports = server;