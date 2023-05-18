const mongoose = require("mongoose");

// Creating Movies Schema
const MoviesSchema = new mongoose.Schema(
  {
    imageurl: { 
        type: String
    },
    title: { 
        type: String 
    },
    actor: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

const Movies = mongoose.model("movies", MoviesSchema);

module.exports = Movies;
