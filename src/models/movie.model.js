import pkg from "mongoose";
const { Schema, model } = pkg;

const movieSchema = new Schema({
    titleMovie: { type: String, required:true },
    genreMovie: { type: String, required:true },
    image: { type: String, required:true },
    rating: { type: Number, required:true, default: 1 }, 
    characters: { type: Array, required:true },
    date: { type: Date, default: Date.now },
});

export default model('movie', movieSchema);