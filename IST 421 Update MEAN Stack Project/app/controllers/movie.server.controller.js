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
});
};

exports.list = function(req, res) {
console.log("Working at all");
//Movie.find().sort('-created').populate('title', 'dateofrelease', 'director', 'genre',
//'actors','runtime','rating').exec(function(err, movies)
Movie.find({'title': 'Jaws'}).exec(function(err, movies) {
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

exports.movieByID = function(req, res, next, id) {
Movie.findById(id).populate('title', 'dateofrelease', 'director', 'genre',
'actors','runtime','rating').exec(function(err, movie) {
if (err) return next(err);
if (!movie) return next(new Error('Failed to load movie ' + id));
req.movie = movie;
next();
});
};

exports.read = function(req, res) {
console.log("In exports.read");
res.json(req.movie);
};


exports.update = function(req, res) {
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
});
};

exports.delete = function(req, res) {
var movie = req.movie;
movie.remove(function(err) {
if (err) {
return res.status(400).send({
message: getErrorMessage(err)
});
} else {
res.json(movie);
}
});
};




