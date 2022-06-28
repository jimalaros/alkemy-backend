import { Schema, model } from 'mongoose';

const characterSchema = new Schema({
    nameCharacter: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    image: { type: String, required: true },
    history: { type: String, required: true },
    movies: [{
        titulo: { type: Array, required: true },
        calificacion: { type: Array, required: true }
    }]
});

export default model('character', characterSchema);