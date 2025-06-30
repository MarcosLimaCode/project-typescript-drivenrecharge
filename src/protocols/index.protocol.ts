export type PhoneData = {
    id: number;
    cpf: string;
    phone: string;
    carrier: number;
    name: string;
    description: string
}

export type Phone =
    Omit<PhoneData, "id">;

export type RechargeData = {
    id: number;
    phone: number;
    price: number
}

export type Recharge =
    Omit<RechargeData, "id">;