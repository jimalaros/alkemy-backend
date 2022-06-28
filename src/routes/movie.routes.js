import { Router } from "express";
import * as movie from "../controllers/movie.controller.js";
import Verificar from "../middlewares/token.middleware.js";

const router = Router();

router.get('/', Verificar, movie.allMovies);

export default router;