const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const collectionSchema = new Schema({
  title: {
    type: String,
    required: true,
    },
  formulas: {
    type: [String]
  },
  homePage: {
    type: Boolean,
    default: true,
  },

});
collectionSchema.set("timestamps", true);
const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;