var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title: String,
  dateofrelease: Date,
  genre: String,
  actors: String,
  runtime: Number,
  rating: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Movie', MovieSchema);
