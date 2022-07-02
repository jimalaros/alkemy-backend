import pkg from "mongoose";
const { Schema, model } = pkg;

const userSchema = new Schema({
    nameUser: { type: String, required: true },
    email: { type: String, unique: true, required:true },
    password: { type: String, required:true },
});

export default model('user', userSchema);