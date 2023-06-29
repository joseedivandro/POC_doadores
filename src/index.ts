import express, {Request, json, Response} from "express";
import httpStatus from "http-status";
import doadoresRouter from "./routers/doadores.routes";

const app = express();

app.use(json());

app.get("/health", (req: Request, res: Response)=>{

    res.sendStatus(httpStatus.OK);
})

app.use(doadoresRouter);    

const  port: number =  parseInt(process.env.PORT) || 5000;

app.listen(port, ()=>{

    console.log(`Server is up  and running on port ${port}`);
})
