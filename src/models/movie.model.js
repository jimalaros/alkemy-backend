import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
    title: { type: String, required:true },
    image: { type: String, required:true },
    rating: { type: Number, required:true, default: 1 }, 
    characters: [{
        nameCharacter: { type: Array, required: true },
        age: { type: Array, required: true }
    }],
    date: { type: Date, default: Date.now },
});

export default model('movie', movieSchema);