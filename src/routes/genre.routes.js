import { Router } from "express";
import * as genre from "../controllers/genre.controller.js";
import { Verificar } from "../middlewares/token.middleware.js";

const router = Router();

/**
 * @swagger
 * /genre:
 *  get:
 *      summary: To get all the genres
 *      tags: [Genres]
 *      responses:
 *          200:
 *              description: Ok
 *          500:
 *              description: Internal Server Error
 */
router.get('/', Verificar, genre.allGenres);

 /**
  * @swagger
  * /genre/newGenre:
  *  post:
  *      summary: To create a new movie
  *      tags: [Genres]
  *      requestBody:
  *          required: true
  *          content:
  *              application/json:
  *                  schema:
  *                    type: object
  *                    required:
  *                       -genreMovie
  *                       -image
  *                    properties:
  *                       genreMovie:
  *                         type: string
  *                         example: "Adventure"
  *                       image:
  *                         type: string
  *                         example: "Adventure.jpg" 
  *      responses:
  *          201:
  *              description: Movie created successfully
  *          400:
  *              description: Bad Request
  *          500:
  *              description: Internal Server Error
  */
router.post('/newGenre', Verificar, genre.newGenre);

export default router;