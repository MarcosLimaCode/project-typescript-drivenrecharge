import express, { Request, Response, Router } from "express";

const rechargeRouter = Router()

rechargeRouter.get("/health", (req: Request, res: Response) => {
    res.send("OPAAAAA").status(200)
}
); 

export default rechargeRouter;