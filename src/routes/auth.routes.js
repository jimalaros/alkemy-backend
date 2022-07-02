import { Router } from "express";
import * as user from "../controllers/auth.controller.js";

const router = Router();

/**
 * @swagger
 * /auth/register:
 *  post:
 *      summary: To create a new user
 *      tags: [Auth]
 *      security: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/register'
 *      responses:
 *          201:
 *              description: User created successfully
 *          404:
 *              description: There is not enough data
 *          400:
 *              description: Bad Request
 */
router.post("/register", user.registerUser);

/**
 * @swagger
 * /auth/login:
 *  post:
 *      summary: To login and get a token
 *      tags: [Auth]
 *      security: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/login'
 *      responses:
 *          401:
 *              description: User unauthorized
 *          200:
 *              description: Ok
 *          404:
 *              description: There is not enough data
 *          400:
 *              description: Bad Request
 */
router.post("/login", user.loginUser);

/**
 * @swagger
 * tags:
 *  name: 'Auth'
 *  description: 'To register a user inside the app'
 * 
 * components:
 *   schemas:
 *     register:
 *         type: object
 *         required:
 *             -nameUser
 *             -email
 *             -password
 *         properties:
 *             nameUser:
 *                 type: string
 *             email:
 *                 type: string
 *             password:
 *                 type: string
 */

/**
 * @swagger
 * tags:
 *  name : 'Auth'
 *  description: 'To log in'
 * 
 * components:
 *  schemas:
 *      login:
 *          type: object
 *          required:
 *              -email
 *              -password
 *          properties:
 *              email:
 *                 type: string
 *              password:
 *                 type: string
*/

export default router;