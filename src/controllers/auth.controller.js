import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import config from "../config.js";

export const registerUser = async (req, res) => {
    try {
        const { nameUser, email, password } = req.body;
        if (nameUser && email && password) {
            const newUser = new user({ 
                nameUser,
                email,
                password: bcrypt.hashSync(password, 10),              
            });  
            await newUser.save();
            res.status(201);
        } else { res.status(400).json("There is not enough data"); }
    } catch (err) { res.status(500).json(err); }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const searchedUser = await user.findOne({ email: req.body.email });
            const searchedPassword = bcrypt.compare(req.body.password, searchedUser.password);
            if (!searchedUser && !searchedPassword) {
                return res.status(401).send({ auth: false, token: null });
            } else {
                const token = jwt.sign({ id: searchedUser._id }, config.secret, {
                    expiresIn: 60 * 60 * 24,
                });
                res.status(200).json({ auth: true, token });
            }
        } else { res.status(400).json("There is not enough data"); }
    } catch (err) { res.status(500).json(err); }
};