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
 *          400:
 *              description: Bad Request
 */
router.get('/', Verificar, character.allCharacters);

/**
 * @swagger
 * /characters/{name}:
 *  get:
 *      summary: To filter the characters by its name
 *      tags: [Characters]
 *      parameters:
 *          - name: name
 *            in: path
 *            required: true
 *            description: name of the character
 *            schema: 
 *              type: string
 *      responses:
 *          200:
 *              description: Ok
 *          400:
 *              description: Bad Request
 */
router.get('/:name', Verificar, character.characterName);

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
 *      responses:
 *          200:
 *              description: Ok
 *          400:
 *              description: Bad Request
 */
router.get('/:age', Verificar, character.characterAge);

/**
 * @swagger
 * /characters/newCharacter:
 *  post:
 *      summary: To create a new character
 *      tags: [Characters]
 *      security: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/character'
 *      responses:
 *          201:
 *              description: Character created successfully
 *          404:
 *              description: There is not enough data
 *          400:
 *              description: Bad Request
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
 *      responses:
 *          200:
 *              description: Ok
 *          400:
 *              description: Bad Request
 */
router.put('/update/:id', Verificar, character.updateCharacters);

/**
 * @swagger
 * /characters/update/{id}:
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
 */
router.delete('/delete/:id', Verificar, character.deleteCharacters);

/**
 * @swagger
 * tags:
 *  name: 'Characters'
 *  description: 'To register a character inside the app'
 * 
 * components:
 *   schemas:
 *     character:
 *         type: object
 *         required:
 *             -nameCharacter
 *             -age
 *             -weight
 *             -image
 *             -history
 *         properties:
 *             nameCharacter:
 *                 type: string
 *             age:
 *                 type: number
 *             weight:
 *                 type: number
 *             image:
 *                 type: string
 *             history:
 *                 type: string
 */

export default router;