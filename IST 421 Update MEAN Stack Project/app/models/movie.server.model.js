var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;

var MovieSchema = new Schema({
title: String,
Dateofrelease: Date,
Director: String,
Genre: String,
Actors: String,
Runtime: String,
Rating: String
},

    {collection: 'moviecollection1'});

MovieSchema.set('toJSON', {
getters: true,
virtuals: true
});
mongoose.model('Movie', MovieSchema);
