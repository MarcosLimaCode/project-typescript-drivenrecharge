import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config()
const app = express();

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200)
}
); 

const port = process.env.PORT;

app.listen(port, () => console.log("Funcionou!"));