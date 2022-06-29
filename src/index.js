import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import './basededatos.js';

import charactersRoutes from './routes/character.routes.js';
import moviesRoutes from './routes/movie.routes.js';
import authRoutes from './routes/auth.routes.js';
import * as options from './utils/swagger.js';

const swaggerSpecs = swaggerJSDoc(options.swaggerOptions);
const app = express();

const cspDefaults = helmet.contentSecurityPolicy.getDefaultDirectives();
delete cspDefaults['upgrade-insecure-requests'];
app.use(helmet({
    contentSecurityPolicy: {directives: cspDefaults}
}));

app.use(express.json());
app.use(cors());

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use('/auth', authRoutes);
app.use('/characters', charactersRoutes);
app.use('/movies', moviesRoutes);

app.listen(5000, function () {
    console.log("Node server running on http://localhost:5000");
}); 

export default app;
