import { Router } from "express";
import * as doadoresControllers from "../controllers/doadores.controller"


const doadoresRouter = Router();

doadoresRouter.get("/doadores", doadoresControllers.obterDoadores);
doadoresRouter.post("/doadores", doadoresControllers.cadastrarDoador);
doadoresRouter.put("/doadores/:id", doadoresControllers.editarDoador);
doadoresRouter.delete("/doadores/:id", doadoresControllers.excluirDoador);

export default doadoresRouter;