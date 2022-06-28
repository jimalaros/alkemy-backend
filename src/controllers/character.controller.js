import character from "../models/character.model.js";

export const allCharacters = async (req, res) => {
    try {
        const characters = await character.find();
        res.json(characters);
    } catch (mistake) { res.status(404).json(mistake); } 
}

export const characterName = async (req, res) => {
    try {
        const character = await character.findOne({ nameCharacter });
        (character) ? res.json(character) : res.status(201).json("Character is not in the database");
    } catch (mistake) { res.status(404).json(mistake); } 
}

export const characterAge = async (req, res) => {
    try {
        const character = await character.findOne({ age });
        (character) ? res.json(character) : res.status(201).json("Character is not in the database");
    } catch (mistake) { res.status(404).json(mistake); } 
}

export const newCharacter = async (req, res) => {
    try {
        const { nameCharacter, age, weight, image, history } = req.body;
        if (nameCharacter && age && weight && image && history) {
            const repeatedCharacter = await character.findOne({ nameCharacter });
            if (repeatedCharacter) {
                res.status(400).json("The email is already in use");
            } else {
                const Personaje = new Personaje({ 
                    nameCharacter,
                    age,
                    weight,
                    image,
                    history,                    
                });  
                await usuario.save();
                res.status(201).json("Character created successfully");
            }
        } else { res.status(400).json("There is not enough data"); }
    } catch (error) { res.status(404).json(error); } 
};

export const updateCharacter = async (req, res) => {
    try {
        const { nameCharacter, age, weight, image, history } = req.body;
        if(nameCharacter && age && weight && image && history) {
            await character.findByIdAndUpdate(req.params.id, { ...req.body });
            res.status(200).json("Character updated successfully");
        } else { res.status(400).json({ msg: 'There is not enough data'}); }
    } catch (error) { res.status(404).json(error); }
}

export const deleteCharacter = async (req, res) => {
    try {
        const searchedCharacter = character.findByIdAndDelete(req.params.id);
        if(searchedCharacter) {
            res.status(200).json({msg: 'The character was deleted successfully'});
        } else { res.status(400).json({ msg: 'There is not enough data'}); }
    } catch (error) { res.status(404).json(error); }
};