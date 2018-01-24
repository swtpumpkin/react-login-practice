const cors = require('cors');

const corsMiddleware = cors({
  origin: process.env.TARGET_ORIGIN
});

module.exports = {
  corsMiddleware,
};