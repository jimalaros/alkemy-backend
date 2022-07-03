import character from '../models/character.model.js';
import movie from '../models/movie.model.js'

export const allCharacters = async (req,res) => {
    try {
        const characters = await character.find();
        res.json(characters);
    } catch (err) { res.status(500).json(err); }
};

export const detailCharacter = async (req,res) => {
    try {
        const { queryName } = req.query;

        const characterFound = await character.findOne({ nameCharacter: queryName });
        const movies = await movie.find().sort({ date: 'desc' }).lean();

        const names = movies.map(nameToFind => nameToFind.characters);

        const vector = names.flat();

        vector.forEach(element => {
            if(element == queryName) {
                for (let index = 0; index < movies.length; index++) {
                    const name = movies[index].characters[index];
                    //(element == name) ? res.json(`The movie asociated to ${queryName} is ${movies[index].titleMovie}`) : res.status(404);
                    if (element == name) {
                        const movie = movies[index].titleMovie;
                        const object = {
                            characterFound, 
                            movie
                        }
                        res.status(200).json(object)
                    } else { res.status(404) }
                }  
            } else { res.status(404) }
        });
    } catch (err) { res.status(500).json(err); }
};

export const characterName = async (req,res) => {
    try {
        const { queryName } = req.query;
        const characterFound = await character.findOne({ nameCharacter: queryName });
        (characterFound) ? res.json(characterFound) : res.status(404).json({err: 'The character does not exist' });
    } catch (err) { res.status(500).json(err); }
};

export const characterAge = async (req,res) => {
    try {
        const { age } = req.params;
        const characterFound = await character.findOne({ age });
        (characterFound) ? res.json(characterFound) : res.status(404).json({err: 'The character does not exist' });
    } catch (err) { res.status(500).json(err); }
};

export const newCharacter = async (req, res) => {
    const { nameCharacter, age, weight, imageCharacter, history } = req.body;
    try {
        if (nameCharacter && age && weight && imageCharacter && history) {
            const repeatedCharacter = await character.findOne({ nameCharacter });
            if (repeatedCharacter) {
                res.json({err: 'The character is already registered'});
            } else {
                new character({ ...req.body }).save();
                res.status(201).json({ msg: "Character created successfully" });
            }
        } else { res.status(400).json({err: 'There is not enough data'}); }
    } catch (err) { res.status(500).json(err); }
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
        else { res.status(400).json({err: 'There is not enough data'}); }
    } catch (err) { res.status(500).json(err); }
};

export const deleteCharacters = async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            await character.findByIdAndDelete(id);
            res.status(200).json({msg: 'El producto fue eliminado con exito' });
        } else { res.status(400).json({ msg: "There is not enough data" }); }
    } catch (err) { res.status(500).json(err); }
};