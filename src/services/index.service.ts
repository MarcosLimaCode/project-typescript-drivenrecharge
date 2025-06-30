import { conflictError, notFoundError } from "../errors/errors";
import { createPhoneRepository, verifyDocumentRepository, verifyPhoneRepository } from "../repositories/index.repository";
import { PhoneData } from "../protocols/index.protocol";


export async function createPhoneServices(req: PhoneData) {
    const foundDocument = await verifyDocumentRepository(req.cpf);
    const foundPhone = await verifyPhoneRepository(req.phone);

    if (foundDocument.length >= 3) throw conflictError("Limite de três de telefones cadastrados.");
    if (foundPhone.length !== 0) throw conflictError("Telefone já cadastrado.");

    return await createPhoneRepository(req.cpf, req.phone, req.carrier, req.name, req.description );
};







// export async function createRechargeServices({ name, phone, cpf }) {
//     const registredName = await verifyNameRepository(cpf);
//     if (registredName.length > 3) throw conflictError("Número");

//     return await createRecharge(name, phone, cpf);
// }


// export async function getRegarchesServices(id) {
//     const result = await getRegarches(id);
//     if (result.length === 0) throw notFoundError("Recarga");

//     return result;
// }