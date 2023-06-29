import { Router } from "express";
import * as doadoresControllers from "../controllers/doadores.controller"


const doadoresRouter = Router();

doadoresRouter.get("/doadores", doadoresControllers.obterDoadores);
doadoresRouter.post("/doadores", doadoresControllers.cadastrarDoador);

export default doadoresRouter;