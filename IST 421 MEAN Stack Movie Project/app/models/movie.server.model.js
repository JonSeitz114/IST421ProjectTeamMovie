var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;
var MovieSchema = new Schema({
_id: Number,
title: String,
Dateofrelease: Date,
Director: String,
Genre: String,
Actors: String,
Runtime: String,
Rating: String

MovieSchema.set('toJSON', {
getters: true,
virtuals: true
});
mongoose.model('Movie', MovieSchema);
