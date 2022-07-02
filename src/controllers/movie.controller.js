import movie from "../models/movie.model.js";

export const allMovies = async (req, res) => {
    try {
        const movies = await movie.find().sort({ date: "desc" }).lean();
        const titleMovie = movies.titleMovie;
        const image = movies.image;
        const rating = movies.rating;
        res.json({ titleMovie, image, rating });  
    } catch (mistake) { res.status(400).json(mistake); } 
}

export const movieByTitle = async (req,res) => {
    try {
        const { title } = req.params;
        const movies = await movie.findOne({ title });
        res.json(movies);
    } catch (error) { res.status(400).json(error); }
};

export const movieByGenre = async (req,res) => {
    try {
        const { genre } = req.params;
        const movies = await movie.findOne({ genre });
        res.json(movies);
    } catch (error) { res.status(400).json(error); }
};

export const newMovie = async (req, res) => {
    try {
        const { titleMovie, image, rating } = req.body;
        if (titleMovie && image && rating) {
            const repeatedmovie = await movie.findOne({ titleMovie });
            if (repeatedmovie) {
                res.status(400).json("The title is already registered");
            } else {
                const newMovie = new movie({ 
                    titleMovie,
                    image,
                    rating,                   
                });  
                await newMovie.save();
                res.status(201).json("movie created successfully");
            }
        } else { res.status(400).json("There is not enough data"); }
    } catch (error) { res.status(400).json(error); } 
};

export const updateMovie = async (req, res) => {
    try {
        const { titleMovie, image, rating } = req.body;
        if(titleMovie && image && rating) {
            await movie.findByIdAndUpdate(req.params.id, { ...req.body });
            res.status(200).json("movie updated successfully");
        } else { res.status(400).json({ msg: 'There is not enough data'}); }
    } catch (error) { res.status(400).json(error); }
}

export const deleteMovie = async (req, res) => {
    try {
        const searchedMovie = movie.findByIdAndDelete(req.params.id);
        if(searchedMovie) {
            res.status(200).json({msg: 'The movie was deleted successfully'});
        } else { res.status(404).json({ msg: 'The movie does not exist'}); }
    } catch (error) { res.status(400).json(error); }
};