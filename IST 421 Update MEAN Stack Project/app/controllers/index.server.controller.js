exports.render = function(req, res) {
if (req.session.lastVisit) {
console.log(req.session.lastVisit);
}

req.session.lastVisit = new Date();
res.render('index', {
title: 'Hello and welcome fellow movie lover!',
userFullName: req.user ? req.user.fullName : '',
user: JSON.stringify(req.user)
});
};

//req.session.lastVisit = new Date();
//res.render('index', {
//title: 'Your movie collection',
//user: JSON.stringify(req.user),
//movie: JSON.stringify(req.movie),
//});
//};