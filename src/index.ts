import express, { json } from "express";
import dotenv from "dotenv";
import rechargeRouter from "./routers/index.router";
import errorHandler from "./middleware/errorHandler.middleware";

dotenv.config()
const app = express();
app.use(json())


app.use(rechargeRouter);
app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => console.log("Funcionou!"));