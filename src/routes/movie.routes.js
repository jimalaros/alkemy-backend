import { Router } from "express";
import * as movie from "../controllers/movie.controller.js";
import { Verificar } from "../middlewares/token.middleware.js";

const router = Router();

/**
 * @swagger
 * /movies:
 *  get:
 *      summary: To get all the movies
 *      tags: [Movies]
 *      responses:
 *          200:
 *              description: Ok
 *          400:
 *              description: Bad Request
 */
router.get('/', Verificar, movie.allMovies);

/**
 * @swagger
 * /movies/{title}:
 *  get:
 *      summary: To filter the movies by its title
 *      tags: [Movies]
 *      parameters:
 *          - name: title
 *            in: path
 *            required: true
 *            description: title of the movie
 *            schema: 
 *              type: string
 *      responses:
 *          200:
 *              description: Ok
 *          400:
 *              description: Bad Request
 */
 router.get('/:name', Verificar, movie.movieByTitle);

 /**
  * @swagger
  * /movies/{genre}:
  *  get:
  *      summary: To filter the movies by its genre
  *      tags: [Movies]
  *      parameters:
  *          - name: genre
  *            in: path
  *            required: true
  *            description: genre of the movie
  *            schema: 
  *              type: string
  *      responses:
  *          200:
  *              description: Ok
  *          400:
  *              description: Bad Request
  */
 router.get('/:age', Verificar, movie.movieByGenre);
 
 /**
  * @swagger
  * /movies/newMovie:
  *  post:
  *      summary: To create a new movie
  *      tags: [Movies]
  *      security: []
  *      requestBody:
  *          required: true
  *          content:
  *              application/json:
  *                  schema:
  *                      $ref: '#/components/schemas/movie'
  *      responses:
  *          201:
  *              description: Movie created successfully
  *          404:
  *              description: There is not enough data
  *          400:
  *              description: Bad Request
  */
 router.post('/newMovie', Verificar, movie.newMovie);
 
 /**
  * @swagger
  * /movies/update/{id}:
  *  put:
  *      summary: To update the movies by its id
  *      tags: [Movies]
  *      parameters:
  *          - name: id
  *            in: path
  *            required: true
  *            description: id of the movie
  *            schema: 
  *              type: string
  *      responses:
  *          200:
  *              description: Ok
  *          400:
  *              description: Bad Request
  */
 router.put('/update/:id', Verificar, movie.updateMovie);
 
 /**
  * @swagger
  * /movies/update/{id}:
  *  delete:
  *      summary: To delete a movie by its id
  *      tags: [Movies]
  *      parameters:
  *          - name: id
  *            in: path
  *            required: true
  *            description: id of the movie
  *            schema: 
  *              type: string
  *      responses:
  *          200:
  *              description: Ok
  *          400:
  *              description: Bad Request
  */
 router.delete('/delete/:id', Verificar, movie.deleteMovie);
 
 /**
  * @swagger
  * tags:
  *  name: 'Movies'
  *  description: 'To create a movie inside the app'
  * 
  * components:
  *   schemas:
  *     movie:
  *         type: object
  *         required:
  *             -titleMovie
  *             -image
  *             -rating
  *         properties:
  *             titleMovie:
  *                 type: string
  *             image:
  *                 type: string
  *             rating:
  *                 type: number
  */

export default router;