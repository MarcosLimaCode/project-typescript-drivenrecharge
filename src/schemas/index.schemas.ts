import joi from "joi";
import { Phone, Recharge } from "protocols/index.protocol";

export const phoneSchema = joi.object<Phone>({
    cpf: joi.string().length(11).required().invalid(null),
    phone: joi.string().required().min(10).max(11),
    carrier: joi.number().required(),
    name: joi.string().required(),
    description: joi.string().required()
});


export const rechargeSchema = joi.object<Recharge>({
    phone: joi.number().required(),
    price: joi.number().required().min(1000).max(100000)
});


