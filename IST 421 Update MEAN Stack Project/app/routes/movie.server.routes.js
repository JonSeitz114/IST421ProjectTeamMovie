module.exports = function(app) {

var users =
require('../../app/controllers/users.server.controller'),

movies =
require('../../app/controllers/movie.server.controller');

app.route('/movies')
.get(movies.list)
.post(users.requiresLogin, movies.create);


/*app.route('/movies/:movieId')
.get(movies.read)
.put(movies.update)
.delete(movies.delete);

//.put(users.requiresLogin, movies.hasAuthorization, movies.update)
//.delete(users.requiresLogin, movies.hasAuthorization, movies.delete);

app.param('movieId', movies.movieByID);*/

app.route('/create')
.post(movies.create)
.get(movies.list);

app.route('/view')
.post(movies.create)
.get(movies.list);

app.route('/update')
.post(movies.create)
.get(movies.list);

app.route('/delete')
.post(movies.create)
.get(movies.list);

};



