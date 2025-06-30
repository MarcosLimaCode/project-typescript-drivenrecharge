import express, { json } from "express";
import dotenv from "dotenv";
import rechargeRouter from "./routers/index.router";

dotenv.config()
const app = express();
app.use(json())


app.use(rechargeRouter);

const port = process.env.PORT;

app.listen(port, () => console.log("Funcionou!"));