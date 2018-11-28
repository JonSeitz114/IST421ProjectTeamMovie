var mongoose = require('mongoose'),
	crypto = require('crypto'),
	ObjectId = mongoose.Schema.Types.ObjectId;
	Schema = mongoose.Schema;


var MovieSchema = new Schema({
_id: ObjectId,
title: String,
dateofrelease: Date,
director: String,
genre: String,
actors: String,
runtime: String,
rating: String
},

    {collection: 'Moviecollection1'});

MovieSchema.set('toJSON', {
getters: true,
virtuals: true
});
mongoose.model('Movie', MovieSchema);
