import { NextFunction, Request, Response } from "express";

export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction): void {
    
    if (error.type === "CONFLICT") {
        res.status(409).send(error.message)
        return;
    }
    
    if (error.type === "NOT FOUND") {
        res.status(404).send(error.message);
        return
    }

    if (error.type === "UNPROCESSABLE ENTITY") {
        res.status(422).send(error.message);
        return
    }
}