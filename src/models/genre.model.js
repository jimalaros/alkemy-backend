import pkg from "mongoose";
const { Schema, model } = pkg;

const genreSchema = new Schema({
    genreMovie: { type: String, required:true },
    image: { type: String, required:true },
    movies: [{
        title: { type: Array, required: true }
    }]
});

export default model('genre', genreSchema);