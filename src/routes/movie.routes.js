import { Router } from "express";
import * as movie from "../controllers/movie.controller.js";
import { Verificar } from "../middlewares/token.middleware.js";

const router = Router();

/**
 * @swagger
 * /movies:
 *  get:
 *      summary: To get image, title and date of the movie
 *      tags: [Movies]
 *      responses:
 *          200:
 *              description: Ok
 *          500:
 *              description: Internal Server Error
 */
router.get('/', Verificar, movie.allMovies);

/**
 * @swagger
 * /movies/detail:
 *  get:
 *      summary: To get all the movies
 *      tags: [Movies]
 *      responses:
 *          200:
 *              description: Ok
 *          500:
 *              description: Internal Server Error
 */
 router.get('/detail', Verificar, movie.detailMovie);

/**
 * @swagger
 * /movies/titleMovie?titleMovie=queryName:
 *  get:
 *      summary: To filter the movies by its title
 *      tags: [Movies]
 *      parameters:
 *          - name: queryName
 *            in: query
 *            required: true
 *            description: title of the movie
 *            schema: 
 *              type: string
 *              required:
 *                -queryName
 *              properties:
 *                 queryName:
 *                      type: string
 *                      example: "Eternals"
 *      responses:
 *          200:
 *              description: Ok
 *          404:
 *              description: Not Found
 *          500:
 *              description: Bad Request
 */
 router.get('/titleMovie', Verificar, movie.movieByTitle);
 
/**
 * @swagger
 * /movies/genre?genre=queryName:
 *  get:
 *      summary: To filter the movies by its genre
 *      tags: [Movies]
 *      parameters:
 *          - name: queryName
 *            in: query
 *            required: true
 *            description: genre of the movie
 *            schema: 
 *              type: string
 *              required:
 *                -queryName
 *              properties:
 *                 queryName:
 *                      type: string
 *                      example: "Adventure"
 *      responses:
 *          200:
 *              description: Ok
 *          404:
 *              description: Not Found
 *          500:
 *              description: Bad Request
 */
 router.get('/genre', Verificar, movie.movieByGenre);

/**
 * @swagger
 * /movies/date?date=queryName:
 *  get:
 *      summary: To filter the movies by its date of creatin
 *      tags: [Movies]
 *      parameters:
 *          - name: queryName
 *            in: query
 *            required: true
 *            description: criteria of order
 *            schema: 
 *              type: string
 *              required:
 *                -queryName
 *              properties:
 *                 queryName:
 *                      type: string
 *                      example: "asc"
 *      responses:
 *          200:
 *              description: Ok
 *          404:
 *              description: Not Found
 *          500:
 *              description: Bad Request
 */
 router.get('/genre', Verificar, movie.movieByDate);

/**
 * @swagger
 * /movies/newMovie:
 *  post:
 *      summary: To create a new movie
 *      tags: [Movies]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    required:
 *                      -titleMovie
 *                      -genreMovie
 *                      -image
 *                      -rating
 *                      -characters
 *                    properties:
 *                      titleMovie:
 *                          type: string
 *                          example: "Eternals"
 *                      genreMovie:
 *                          type: string
 *                          example: "Adventure"
 *                      image:
 *                          type: string
 *                          example: "Eternals.jpg"
 *                      rating:
 *                          type: number
 *                          example: 2
 *                      characters:
 *                          type: array
 *                          example: [Harry Styles, Angelina Jolie]
 *      responses:
 *          "201":
 *              description: User created successfully
 *          "400":
 *              description: Bad Request
 *          "500":
 *              description: Internal Server Error
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
  *          500:
  *              description: Internal Server Error
  */
 router.put('/update/:id', Verificar, movie.updateMovie);
 
 /**
  * @swagger
  * /movies/delete/{id}:
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
  *          500:
  *              description: Internal Server Error
  */
 router.delete('/delete/:id', Verificar, movie.deleteMovie);

export default router;