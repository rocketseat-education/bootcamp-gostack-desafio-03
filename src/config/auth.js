require('dotenv/config');

export default {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};
