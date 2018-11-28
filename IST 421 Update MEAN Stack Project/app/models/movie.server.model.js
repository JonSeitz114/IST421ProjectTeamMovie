var mongoose = require('mongoose'),
	crypto = require('crypto'),
	ObjectId = mongoose.Schema.Types.ObjectId;
	Schema = mongoose.Schema;


var MovieSchema = new Schema({

title: String,
dateofrelease: Date,
director: String,
genre: String,
actors: String,
runtime: String,
rating: String
},

    {collection: 'moviecollection1'});

MovieSchema.set('toJSON', {
getters: true,
virtuals: true
});
mongoose.model('Movie', MovieSchema);
