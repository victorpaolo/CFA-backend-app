const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  title: {
    type: String,
    required: true,
    },
  // formulas: [formulaId],
  // homePage: {
  //     type: Boolean,
  //     // required: true,
  //   },
  userId: {
    type: String,
  }
  },
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;