const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9_.+-]+@(?:ecn\.forces\.gc\.ca|forces\.gc\.ca|[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/,
      'Please enter a valid email',
    ],
  },
  role: {
    type: String,  
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
