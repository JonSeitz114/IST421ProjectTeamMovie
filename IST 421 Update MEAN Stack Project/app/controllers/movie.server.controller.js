var mongoose = require('mongoose'),
Movie = mongoose.model('Movie');


exports.render = function(req, res) {
if (req.session.lastVisit) {
console.log(req.session.lastVisit);
}
req.session.lastVisit = new Date();
res.render('movies', {
title: 'Your movie collection',
user: JSON.stringify(req.user),
movie: JSON.stringify(req.movie),
});
};


var getErrorMessage = function(err) {
if (err.errors) {
for (var errName in err.errors) {
if (err.errors[errName].message) return
err.errors[errName].message;
}
} else {
return 'Unknown server error';
}
};


exports.create = function(req, res, next) {
console.log("Create movie entry")
var movie = new Movie(req.body);
movie.creator = req.user();

movie.save(function(err) {
if (err) {
return res.status(400).send({
message: getErrorMessage(err)
});
} else {
res.json(movie);
}
console.log("Creating" + movie);
});
};

/*exports.create function(req, res) {
console.log("Create movie");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');
var db = mongoose.connection;

var MovieSchema = new Schema({
title: String,
dateofrelease: Date,
director: String,
genre: String,
actors: String,
runtime: String,
rating: String
}, {collection: 'Moviecollection1'});

var Movie = mongoose.model('Movie', CourseSchema);
var newMovie = new Movie({"title" : "Jaws",
"dateofrelease" : [ "June", "20", "1975"],
"director" : "Steven Spielberg",
"genre" : "Thriller",
"actors" : [
"Roy Schneider",
"Richard Dreyfuss, Robert Shaw"
],
"runtime" : "124 minutes",
"rating" : "Awesometacular"});
newMovie.save();*/

exports.list = function(req, res) {
console.log("List movies");
//Movie.find().sort('-created').populate('title', 'dateofrelease', 'director', 'genre',
//'actors','runtime','rating').exec(function(err, movies)
Movie.find().exec(function(err, movies) {
if (err) {
return res.status(400).send({
message: getErrorMessage(err)
});
} else {
res.json(movies);
}
console.log("Finding" + movies);
});
};
/*
exports.list = function(req, res) {
console.log("List movie");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');
var db = mongoose.connection;

var MovieSchema = new Schema({
_id: ObjectId,
title: String,
dateofrelease: Date,
director: String,
genre: String,
actors: String,
runtime: String,
rating: String
}, {collection: 'Moviecollection1'});

var Movie = mongoose.model('Movie', CourseSchema);

Movie.find(function (err, movies){
    if (err) return console.error(err);
    console.log(movies);
})
};*/

exports.movieByID = function(req, res, next, id) {
console.log("Mongo ID, identified as _id.");
Movie.findById(id).populate('title', 'dateofrelease', 'director', 'genre',
'actors','runtime','rating').exec(function(err, movie) {
if (err) return next(err);
if (!movie) return next(new Error('Failed to load movie ' + id));
req.movie = movie;
next();
});
};

exports.read = function(req, res) {
res.json(req.movie);
console.log("In exports.read");
};


exports.update = function(req, res) {
console.log("Update Movies");
var movie = req.movie;
movie.title = req.body.title;
movie.dateofrelease = req.body.dateofrelease;
movie.director = req.body.director;
movie.genre = req.body.genre;
movie.actors = req.body.actors;
movie.runtime = req.body.runtime;
movie.rating = req.body.rating;
movie.save(function(err) {
if (err) {
return res.status(400).send({
message: getErrorMessage(err)
});
} else {
res.json(movie);
}
console.log("Updating" + movies);
});
};

exports.delete = function(req, res) {
console.log("Delete Movies");
var movie = req.movie;
movie.remove(function(err) {
if (err) {
return res.status(400).send({
message: getErrorMessage(err)
});
} else {
res.json(movie);
}
console.log("Deleting" + movies);
});
};




