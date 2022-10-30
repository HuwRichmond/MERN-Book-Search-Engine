const jwt = require('jsonwebtoken');
// set token secret and expiration date
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  // allows token to be sent via  req.query or headers
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
    // send to next endpoint
    // graphQL doesn't use endpoints
    // next();
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
