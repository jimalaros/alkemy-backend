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
 *                    type: object
 *                    required:
 *                      -nameUser
 *                      -email
 *                      -password
 *                    properties:
 *                      nameUser:
 *                          type: string
 *                          example: "J"
 *                      email:
 *                          type: string
 *                          example: "j@gmail.com"
 *                      password:
 *                          type: string
 *                          example: "1234"
 *      responses:
 *          "201":
 *              description: User created successfully
 *          "400":
 *              description: Bad Request
 *          "500":
 *              description: Internal Server Error
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
 *                    type: object
 *                    required:
 *                      -email
 *                      -password
 *                    properties:
 *                      email:
 *                          type: string
 *                          example: "j@gmail.com"
 *                      password:
 *                          type: string
 *                          example: "1234"
 *      responses:
 *          "401":
 *              description: User unauthorized
 *          "200":
 *              description: Ok
 *          "400":
 *              description: Bad Request
 *          "500":
 *              description: Internal Server Error
 */
router.post("/login", user.loginUser);

export default router;