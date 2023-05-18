const MoviesModel = require('../models/movies');



/* 

Route         /movies
Description   Get the list of all movies
Access        PUBLIC
Parameter     NONE
Mathods       GET 

*/
module.exports.getAllMovies = async (req, res) => {

    const getAllMovies = await MoviesModel.find();
    // console.log(getAllBooks);
    return res.json(getAllMovies);

}


/* 

Route         /movies/:id
Description   Get a single movie
Access        PUBLIC
Parameter     id
Mathods       GET 

*/
module.exports.getSpecificMovies = async (req, res) => {

    const { id } = req.params;

    // console.log(id);

    const getSpecificMovies = await MoviesModel.findOne({_id: id});

    // console.log(getSpecificMovies);

    if(getSpecificMovies == null){
        return res.json(`Can't able to find the movies from the database`);
    }

    return res.status(200).json(getSpecificMovies);
}




