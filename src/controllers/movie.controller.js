import movie from "../models/movie.model.js";

export const allMovies = async (req, res) => {
    try {
        const movies = await movie.find().sort({ date: "desc" }).lean();
        const title = movies.title;
        const image = movies.image;
        const rating = movies.rating;
        res.json({ title, image, rating });  
    } catch (mistake) { res.status(404).json(mistake); } 
}

export const newMovie = async (req, res) => {
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

export const updateMovie = async (req, res) => {
    try {
        const { nameCharacter, age, weight, image, history } = req.body;
        if(nameCharacter && age && weight && image && history) {
            await character.findByIdAndUpdate(req.params.id, { ...req.body });
            res.status(200).json("Character updated successfully");
        } else { res.status(400).json({ msg: 'There is not enough data'}); }
    } catch (error) { res.status(404).json(error); }
}

export const deleteMovie = async (req, res) => {
    try {
        const searchedMovie = movie.findByIdAndDelete(req.params.id);
        if(searchedMovie) {
            res.status(200).json({msg: 'The movie was deleted successfully'});
        } else { res.status(400).json({ msg: 'There is not enough data'}); }
    } catch (error) { res.status(404).json(error); }
};