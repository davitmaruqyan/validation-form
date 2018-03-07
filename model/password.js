const crypto = require('crypto');

function getPassword(pass) {
  let salt = 'I love cupcakes';
  let password = crypto.createHmac('sha256', pass).update(salt).digest('hex');
  return password;
};

module.exports = getPassword;
