exports.render = function(req, res) {
if (req.session.lastVisit) {
console.log(req.session.lastVisit);
}

req.session.lastVisit = new Date();
res.render('index', {
title: 'Hello and welcome fellow movie lover!',
userFullName: req.user ? req.user.fullName : ''
});
};

//req.session.lastVisit = new Date();
//res.render('index', {
//title: 'Hello and welcome fellow movie lover!',
//user: JSON.stringify(req.user),
//movie: JSON.stringify(req.user),
//});
//};