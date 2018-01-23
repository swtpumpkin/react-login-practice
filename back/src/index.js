require('dotenv').config();

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
const server = http.Server(app);

server.listen(PORT, () => {
  console.log(`Able to connect to ${PORT}`);
});

module.exports = server;