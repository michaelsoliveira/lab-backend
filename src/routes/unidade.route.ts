import { Router } from "express";
import { UnidadeController } from "../controllers/unidade.controller";
import { UnidadeService } from "../services/unidade.service";
import { PrismaClient } from "@prisma/client";
import { Authentication } from "@/middleware/auth.middleware";
const prisma = new PrismaClient();
const unidadeService = new UnidadeService(prisma);
const unidadeController = new UnidadeController(unidadeService);

const router = Router();

router.get('/list-all', Authentication(), unidadeController.listUnidades.bind(unidadeController));
router.post('/create', unidadeController.createUnidade.bind(unidadeController));
// router.put('/update/:id', unidadeController.updateUnidade.bind(unidadeController));
router.delete('/delete/:id', unidadeController.deleteUnidade.bind(unidadeController));

export default router;