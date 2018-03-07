const db = require('../db');
const getPassword = require('../password');
const UserSchema = new db.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },

  name: {
    type: String,
    required: true
  },

  surname: {
    type: String,
    required: true
  },

  hashpassword: {
    type: String,
    required:true
  },

  gender: {
    type:String,
    enum:['Male', 'Female']
  }

})

UserSchema.virtual('password').set(function (pass) {
  this.hashpassword = this.getPassword(pass)
}).get(function () {
  return this.hashpassword
});

UserSchema.methods.chackPassword = function (pass) {
  return this.getPassword(pass) === this.hashpassword
}

UserSchema.methods.getPassword = getPassword;

const users = db.model('user', UserSchema);
module.exports = users;
