import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import './basededatos.js';

import authRoutes from './routes/auth.routes.js';
import charactersRoutes from './routes/character.routes.js';
import moviesRoutes from './routes/movie.routes.js';
import genreRoutes from './routes/genre.routes.js'

import * as options from './utils/swagger.js';

const swaggerSpecs = swaggerJSDoc(options.swaggerOptions);
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use("/auth", authRoutes);
app.use("/characters", charactersRoutes);
app.use("/movies", moviesRoutes);
app.use("/genre", genreRoutes)

app.listen(5000, function () {
    console.log("Node server running on http://localhost:5000");
});

export default app;