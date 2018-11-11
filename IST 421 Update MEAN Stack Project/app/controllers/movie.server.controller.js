var Movie = require('mongoose').model('Movie');

//passport = require('passport');

exports.create = function(req, res, next) {
var movie = new Movie(req.body);
movie.save(function(err) {
if (err) {
return next(err);
} else {
res.json(movie);
}
});
};

exports.list = function(req, res, next) {
Movie.find({}, function(err, movies) {
if (err) {
return next(err);
} else {
res.json(movies);
}
});
};

exports.read = function(req, res) {
res.json(req.movie);
};
exports.movieByID = function(req, res, next, id) {
Movie.findOne({
_id: id
}, function(err, user) {
if (err) {
return next(err);
} else {
req.movie = movie;
next();
}
});
};

exports.update = function(req, res, next) {
Movie.findByIdAndUpdate(req.movie.id, req.body, function(err,
movie) {
if (err) {
return next(err);
} else {
res.json(movie);
}
});
};

exports.delete = function(req, res, next) {
req.movie.remove(function(err) {
if (err) {
return next(err);
} else {
res.json(req.movie);
}
})
};



