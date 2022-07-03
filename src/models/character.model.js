import pkg from "mongoose";
const { Schema, model } = pkg;

const characterSchema = new Schema({
    nameCharacter: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    imageCharacter: { type: String, required: true },
    history: { type: String, required: true }
});

export default model('character', characterSchema);