import { Router } from "express";
import * as character from "../controllers/character.controller.js";
import { Verificar } from "../middlewares/token.middleware.js";

const router = Router();

router.get('/', Verificar, character.allCharacters);

router.get('/:name', Verificar, character.characterName);

router.get('/:age', Verificar, character.characterAge);

router.post('/newCharacter', Verificar, character.newCharacter);

router.put('/update/:id', Verificar, character.updateCharacter);

router.delete('/delete/:id', Verificar, character.deleteCharacter);

export default router;