module.exports = function(app) {

var movies =
require('../../app/controllers/movie.server.controller');

app.route('/movies')
.post(movies.create)
.get(movies.list);

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

app.route('/movies/:movieId')
.get(movies.read)
.put(movies.update)
.delete(movies.delete);
app.param('movieId', movies.movieByID);

app.get('/', movies.render);

};



