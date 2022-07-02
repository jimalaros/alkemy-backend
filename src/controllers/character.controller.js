import character from '../models/character.model.js';
import { allMovies } from './movie.controller.js';

export const allCharacters = async (req,res) => {
    try {
        const characters = await character.find();
        res.json(characters);
    } catch (error) { res.status(400).json(error); }
};

export const detailCharacter = async (req,res) => {
    try {
        const { nameCharacter } = req.params;
        const characters = allMovies.characters;
       
        for (let index = 0; index < characters.length; index++) {
            const element = characters[index];
            if (element == nameCharacter) {
                res.json(element);
            } else {
                res.status(400).json({ msg: "The character does not have any movie asociated" });
            }
        }
    } catch (error) { res.status(404).json(error); }
};

export const characterName = async (req,res) => {
    try {
        const { nameCharacter } = req.params;
        const characters = await character.findOne({ nameCharacter });
        res.json(characters);
    } catch (error) { res.status(400).json(error); }
};

export const characterAge = async (req,res) => {
    try {
        const { ageCharacter } = req.params;
        const characters = await character.findOne({ ageCharacter });
        res.json(characters);
    } catch (error) { res.status(400).json(error); }
};

export const newCharacter = async (req, res) => {
    const { imageCharacter, nameCharacter, ageCharacter, weight, history } = req.body;
    try {
        if (imageCharacter && nameCharacter && ageCharacter && weight && history) {
            const repeatedCharacter = await character.findOne({ nameCharacter });
            if (repeatedCharacter) {
                res.status(400).json("The character is already in registered");
            } else {
                new character({ ...req.body }).save();
                res.status(201).json({ msg: "Character created successfully" });
            }
        } else { res.status(400).json({ msg: "There is not enough data" }); }
    } catch (error) { res.status(400).json(error); }
};

export const updateCharacters = async (req, res) => {
    try {
        const { id } = req.params;
        const { imageCharacter, nameCharacter, ageCharacter, weight, history } = req.body;
        if (imageCharacter && nameCharacter && ageCharacter && weight && history) {
            const updates = { ...req.body };
            const options = { new: true };
            await character.findByIdAndUpdate(id, updates, options);
            res.status(200).json({ msg: "Character updated successfully" });
        }
        else { res.status(400).json({ msg: "There is not enough data" }); }
    } catch (error) { res.status(404).json(error); }
};

export const deleteCharacters = async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            await character.findByIdAndDelete(id);
            res.status(200).json({msg: 'El producto fue eliminado con exito' });
        } else { res.status(400).json({ msg: "There is not enough data" }); }
    } catch (error) { res.status(404).json(error); }
};