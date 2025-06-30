import { Request, Response } from "express";
import { createPhoneServices } from "../services/index.service";


export async function createPhone(req: Request, res: Response) {
    const result = await createPhoneServices(req.body);
    res.status(201).send(result.rows[0]);
    return
};