const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    },
  surname: {
    type: String,
    required: true,
    },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: Date,
    required: true,
    },
  username: {
    type: String,
    required: true,
    unique: true,
    },
  password: {
    type: String,
    required: true,
    },

  collections: {
    type: [ { type: Schema.Types.ObjectId, ref: "Collection"} ]
  }

});
userSchema.set("timestamps", true);
const User = mongoose.model('User', userSchema);

module.exports = User;