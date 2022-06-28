import { Router } from "express";
import * as user from "../controllers/auth.controller.js";

const router = Router();

router.post('/register', user.register);

router.post('/login', user.login);

export default router;