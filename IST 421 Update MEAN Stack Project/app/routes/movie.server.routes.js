var movies =
require('../../app/controllers/movie.server.controller');

module.exports = function(app) {
//app.route('/create')
//.get(movies.renderCreate)
//.post(movies.create);
//app.route('/view')
//.get(movies.renderView)
//.post(movies.view);
//app.route('/update')
//.get(movies.renderUpdate)
//.post(movies.update);
//app.route('/delete')
//.get(movies.renderDelete)
//.post(movies.delete);

app.route('/movies')
.post(movies.create)
.get(movies.list);

app.route('/movies/:movieId')
.get(movies.read)
.put(movies.update)
.delete(movies.delete);
app.param('movieId', movies.movieByID);

//app.get('/movies', movies.movies);
};



