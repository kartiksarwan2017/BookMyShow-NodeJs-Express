const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies_controller');


// http://localhost:5000/movies
router.get("/movies", moviesController.getAllMovies);

// http://localhost:5000/movies/:id
router.get("/movie/:id", moviesController.getSpecificMovies);

module.exports = router;