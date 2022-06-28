import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    nameUser: { type: String, required: true },
    email: { type: String, required:true },
    password: { type: String, required:true },
});

export default model('user', userSchema);