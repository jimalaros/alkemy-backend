import { Router } from "express";
import * as character from "../controllers/character.controller.js";
import { Verificar } from "../middlewares/token.middleware.js";

const router = Router();

/**
 * @swagger
 * /characters:
 *  get:
 *      summary: To get all the characters
 *      tags: [Characters]
 *      responses:
 *          200:
 *              description: Ok
 *          500:
 *              description: Bad Request
 */
router.get('/', Verificar, character.allCharacters);

/**
 * @swagger
 * /characters/detail/nameCharacter?nameCharacter=queryName::
 *  get:
 *      summary: To get all the characters
 *      tags: [Characters]
 *      parameters:
 *          - name: queryName
 *            in: query
 *            required: true
 *            description: name of the character
 *            schema: 
 *              type: string
 *              required:
 *                -queryName
 *              properties:
 *                 queryName:
 *                      type: string
 *                      example: "Will Smith"
 *      responses:
 *          200:
 *              description: Ok
 *          404:
 *              description: Not Found
 *          500:
 *              description: Internal Server Error
 */
 router.get('/detail/nameCharacter', Verificar, character.detailCharacter);

/**
 * @swagger
 * /characters/nameCharacter?nameCharacter=queryName:
 *  get:
 *      summary: To filter the characters by its name
 *      tags: [Characters]
 *      parameters:
 *          - name: queryName
 *            in: query
 *            required: true
 *            description: name of the character
 *            schema: 
 *              type: string
 *              required:
 *                -queryName
 *              properties:
 *                 queryName:
 *                      type: string
 *                      example: "Will Smith"
 *      responses:
 *          200:
 *              description: Ok
 *          404:
 *              description: Not Found
 *          500:
 *              description: Bad Request
 */
router.get('/nameCharacter', Verificar, character.characterName);

/**
 * @swagger
 * /characters/{age}:
 *  get:
 *      summary: To filter the characters by its age
 *      tags: [Characters]
 *      parameters:
 *          - name: age
 *            in: path
 *            required: true
 *            description: age of the character
 *            schema: 
 *              type: string
 *              properties:
 *                 age:
 *                      type: number
 *                      example: 50
 *      responses:
 *          200:
 *              description: Ok
 *          404:
 *              description: Not Found
 *          500:
 *              description: Bad Request
 */
router.get('/:age', Verificar, character.characterAge);

/**
 * @swagger
 * /characters/newCharacter:
 *  post:
 *      summary: To create a new character
 *      tags: [Characters]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    required:
 *                      -nameCharacter
 *                      -age
 *                      -weight
 *                      -imageCharacter
 *                      -history
 *                    properties:
 *                      nameCharacter:
 *                          type: string
 *                          example: "Morgan Freeman"
 *                      age:
 *                          type: number
 *                          example: 85
 *                      weight:
 *                          type: number
 *                          example: 65
 *                      imageCharacter:
 *                          type: string
 *                          example: "MorganFreman.jpg"
 *                      history:
 *                          type: string
 *                          example: "Hollywood actor"            
 *      responses:
 *          201:
 *              description: Character created successfully
 *          400:
 *              description: Bad Request
 *          500:
 *              description: Internal Server Error
 */
router.post('/newCharacter', Verificar, character.newCharacter);

/**
 * @swagger
 * /characters/update/{id}:
 *  put:
 *      summary: To update the characters by its id
 *      tags: [Characters]
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: id of the character
 *            schema: 
 *              type: string
 *              example: "62bc788a0b718d90f48fd8ef"
 *      responses:
 *          200:
 *              description: Ok
 *          400:
 *              description: Bad Request
 *          500:
 *              description: Internal Server Error
 */
router.put('/update/:id', Verificar, character.updateCharacters);

/**
 * @swagger
 * /characters/delete/{id}:
 *  delete:
 *      summary: To delete a character by its id
 *      tags: [Characters]
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: id of the character
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
router.delete('/delete/:id', Verificar, character.deleteCharacters);

export default router;