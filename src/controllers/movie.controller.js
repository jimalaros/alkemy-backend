import movie from "../models/movie.model.js";
import genre from "../models/genre.model.js";

export const allMovies = async (req, res) => {
    try {

        let moviesToShow = [];

        const movies = await movie.find().sort({ date: 'desc' });
        
        movies.forEach(element => {
            let title = element.titleMovie;
            let date = element.date;
            let image = element.image;

            let movieToShow = {
                title, 
                date, 
                image
            } 
            
            moviesToShow.push(movieToShow);
        });

        res.json(moviesToShow);
        
    } catch (err) { res.status(500).json(err); } 
}

export const detailMovie = async (req, res) => {
    try {
        const movies = await movie.find().sort({ date: 'desc' }).lean();
        res.json(movies);  
    } catch (err) { res.status(500).json(err); } 
}

export const movieByTitle = async (req,res) => {
    try {
        const { queryName } = req.query;
        const movieFound = await movie.findOne({ titleMovie: queryName });
        (movieFound) ? res.json(movieFound) : res.status(404).json({err: 'The movie does not exist' });
    } catch (err) { res.status(500).json(err); }
};

export const movieByGenre = async (req,res) => {
    try {
        const { queryName } = req.query;
        const movieFound = await movie.findOne({ genreMovie: queryName });
        (movieFound) ? res.json(movieFound) : res.status(404).json({err: 'The movie does not exist' });
    } catch (err) { res.status(500).json(err); }
};

export const movieByDate = async (req, res) => {
    try {
        const { queryName } = req.query;
        const movieFound = await movie.find().sort({ date: queryName }).lean();
        (movieFound) ? res.json(movieFound) : res.status(404).json({err: 'There are no movies to order' });
    } catch (err) { res.status(500).json(err); }
}

export const newMovie = async (req, res) => {
    try {
        const { titleMovie, genreMovie, image, rating, characters } = req.body;
        const genreToSearch = await genre.findOne({ genre: genreMovie });
        if (genreToSearch) {
            if (titleMovie && genreMovie && image && rating && characters) {

                const repeatedmovie = await movie.findOne({ titleMovie });
                if (repeatedmovie) {
                    res.json({err: 'The movie is already created'});
                } else {
                    const newMovie = new movie({ 
                        titleMovie,
                        genreMovie,
                        image,
                        rating,  
                        characters                 
                    });  
                    await newMovie.save();
                    res.status(201).json({msg: 'Movie created successfully'});
                }
            } else { res.status(400).json({err: 'There is not enough data'}); }
        } else { res.status(404).json({err: 'Genre not found'}); }
    } catch (err) { res.status(500).json(err); } 
};

export const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { titleMovie, genreMovie, image, rating, characters } = req.body;
        if(titleMovie && genreMovie && image && rating && characters) {
            const updates = { ...req.body };
            const options = { new: true };
            await movie.findByIdAndUpdate(id, updates, options);
            res.status(200).json("movie updated successfully");
        } else { res.status(400).json({err: 'There is not enough data'}); }
    } catch (err) { res.status(500).json(err); }
}

export const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const searchedMovie = movie.findByIdAndDelete(id);
        (searchedMovie) ? res.status(200).json({msg: 'The movie was deleted successfully'}) : res.status(400).json({err: 'The movie does not exist'});
    } catch (err) { res.status(500).json(err); }
};