import { Request, Response } from "express";
import { createPhoneServices, createRechargeServices, getPhoneServices, getRechargesServices, getSummaryService } from "../services/index.service";


export async function createPhone(req: Request, res: Response) {
    const result = await createPhoneServices(req.body);
    res.status(201).send(result.rows[0]);
    return
};


export async function createRecharge(req: Request, res: Response) {
    const result = await createRechargeServices(req.body);
    res.status(201).send(result.rows[0]);
    return
};

export async function getPhone(req: Request, res: Response) {
    const document = req.params.document;
    const result = await getPhoneServices(document);
    res.send(result);
    return
};

export async function getRecharches(req: Request, res: Response) {
    const number = req.params.number;
    const result = await getRechargesServices(number);
    res.send(result);
    return
};

export async function getSummary(req: Request, res: Response) {
    const document = req.params.document;
    const result = await getSummaryService(document, req.body);
    res.send(result);
    return
};