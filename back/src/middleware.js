const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const corsMiddleware = cors({
  origin: process.env.TARGET_ORIGIN
});

const bodyParserJsonMiddleware = bodyParser.json();

const bodyParserUrlEncodedMiddleware = bodyParser.urlencoded({ extended: false });

const cookieSessionMiddleware = cookieSession({
  name: 'react_login_practice',
  keys: [
    process.env.SESSION_SECRET
  ],
  cookie: {
    maxAge: 1000 * 60 * 60 * 8
  }
});

module.exports = {
  corsMiddleware,
  bodyParserJsonMiddleware,
  bodyParserUrlEncodedMiddleware,
  cookieSessionMiddleware,
};