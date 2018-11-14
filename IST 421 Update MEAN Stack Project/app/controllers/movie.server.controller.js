var Movie = require('mongoose').model('Movie');

//var getErrorMessage = function(err) {
//if (err.errors) {
//for (var errName in err.errors) {
//if (err.errors[errName].message) return
//err.errors[errName].message;
//}
//} else {
//return 'Unknown server error';
//}
//};


exports.create = function(req, res, next) {
var movie = new Movie(req.body);
//movie.creator = req.user();

movie.save(function(err) {
if (err) {
return next(err);
} else {
res.json(movie);
}
});
};

exports.list = function(req, res, next) {
console.log("In exports.list");
Movie.find({}, function(err, movies) {
if (err) {
return next(err);
} else {
res.json(movies);
}
});
};

exports.read = function(req, res) {
console.log("In exports.read");
res.json(req.movie);
};
exports.movieByID = function(req, res, next, id) {
console.log("In exports.movieByID" + id);
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
console.log("In exports.update");
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
console.log("In exports.delete");
req.movie.remove(function(err) {
if (err) {
return next(err);
} else {
res.json(req.movie);
}
})
};



