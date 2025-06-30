import joi from "joi";
import { PhoneData } from "protocols/index.protocol";

const phoneSchema = joi.object<PhoneData>({
    cpf: joi.string().length(11).required().invalid(null),
    phone: joi.string().required().min(10).max(11),
    carrier: joi.number().required(),
    name: joi.string().required(),
    description: joi.string().required()
});

export default phoneSchema;
