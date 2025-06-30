import { Request, Response } from "express";
import { PhoneData } from "../protocols/index.protocol";


export async function createPhones(req: Request, res: Response) {
    const phoneData = req.body as PhoneData;
    res.send(phoneData.cpf);
};