import pkg from "mongoose";
const { Schema, model } = pkg;

const GeneroSchema = new Schema({
    nombre: { type: String, required:true },
    imagen: { type: String, required:true },
    peliculas: [{
        titulo: { type: Array, required: true },
        calificacion: { type: Array, required: true }
    }]
});

export default model('Genero', GeneroSchema);