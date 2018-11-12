var movies =
require('../../app/controllers/movie.server.controller');

module.exports = function(app) {

app.route('/movies')
.post(movies.create)
.get(movies.list);

app.route('/movies/:movieId')
.get(movies.read)
.put(movies.update)
.delete(movies.delete);
app.param('movieId', movies.movieByID);
};



