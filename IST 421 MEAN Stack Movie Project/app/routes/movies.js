var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/movie.model.js');   

/* GET ALL MOVIES */
router.get('/', function(req, res, next) {
  Movie.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE MOVIE BY ID */
router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE MOVIE */
router.post('/', function(req, res, next) {
  Movie.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE MOVIE */
router.put('/:id', function(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE MOVIE */
router.delete('/:id', function(req, res, next) {
  Movie.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;