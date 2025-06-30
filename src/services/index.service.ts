import { conflictError, notFoundError } from "../errors/errors";
import { createPhoneRepository, createRechargeRepository, getPhoneRepository, getRechargesRepository, getSummaryRepository, verifyDocumentRepository, verifyIdRepository, verifyNumberRepository, verifyPhoneRepository } from "../repositories/index.repository";
import { Phone, PhoneData, RechargeData } from "../protocols/index.protocol";


export async function createPhoneServices(req: Phone) {
    const foundDocument = await verifyDocumentRepository(req.cpf);
    const foundPhone = await verifyPhoneRepository(req.phone);

    if (foundDocument.length >= 3) throw conflictError("Limite de três de telefones cadastrados.");
    if (foundPhone.length !== 0) throw conflictError("Telefone já cadastrado.");

    return await createPhoneRepository(req.cpf, req.phone, req.carrier, req.name, req.description );
};

export async function createRechargeServices(req: RechargeData) {
    const checkPhone = await verifyIdRepository(req.phone);
    if (checkPhone.length === 0) throw notFoundError("Telefone não encontrado.");
    return await createRechargeRepository(req.phone, req.price);
}

export async function getPhoneServices(document: string) {
    const result = await getPhoneRepository(document);
    return result;
}

export async function getRechargesServices(number: string) {
    const checkPhone = await verifyNumberRepository(number);
    if (checkPhone.length === 0) throw notFoundError("Telefone não encontrado.");
    const result = await getRechargesRepository(checkPhone[0].id);
    return result;
}

export async function getSummaryService(document: string, req: PhoneData) {
    const foundDocument = await verifyDocumentRepository(req.cpf);
    if (foundDocument.length === 0) throw notFoundError("CPF não encontrado.");
    const result = await getSummaryRepository(document);
    if (result.length === 0) throw notFoundError("CPF não encontrado.");
    return result[0];
}