import genre from "../models/genre.model.js";

export const allGenres = async (req, res) => {
    try {
        const genres = await genre.find().sort().lean();
        res.json(genres);  
    } catch (err) { res.status(500).json(err); } 
}

export const newGenre = async (req, res) => {
    try {
        const { genreMovie, image } = req.body;
        if (genreMovie && image) {
            const repeatedmovie = await genre.findOne({ genreMovie });
            if (repeatedmovie) {
                res.status(400).json({err: 'The genre is already created'});
            } else {
                const newGenre = new genre({ 
                    genreMovie,
                    image,                  
                });  
                await newGenre.save();
                res.status(201).json("genre created successfully");
            }
        } else { res.status(400).json({err: 'There is not enough data'}); }
    } catch (err) { res.status(500).json(err); } 
}