require('dotenv').config();

const PORT = process.env.PORT || 3000;

const express = require('express');
const mw = require('./middleware');
const app = express();
const server = http.Server(app);

app.set('trust proxy');
app.use(mw.corsMiddleware);

server.listen(PORT, () => {
  console.log(`Able to connect to ${PORT}`);
});

module.exports = server;