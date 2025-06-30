import { PhoneData, RechargeData } from "protocols/index.protocol";
import db from "../database/database";


export async function createPhoneRepository(cpf: string, phone: string, carrier: number, name: string, description: string) {
    const result = await db.query<PhoneData>(`
        INSERT INTO phones (cpf, phone, carrier_id, name, description)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;`, [cpf, phone, carrier, name, description]);
    return result;
}

export async function verifyDocumentRepository(cpf: string) {
    const result = await db.query<PhoneData>(`
                SELECT * FROM phones 
                WHERE cpf = $1;`, [cpf]);
    return result.rows;
}

export async function verifyPhoneRepository(phone: string) {
    const result = await db.query<PhoneData>(`
                SELECT * FROM phones 
                WHERE phone = $1;`, [phone]);
    return result.rows;
}

export async function createRechargeRepository(phone: number, price: number) {
    const result = await db.query<RechargeData>(`
         INSERT INTO recharges (phone_id, price)
         VALUES ($1, $2)
         RETURNING *;`, [phone, price]);
    return result;
}


export async function verifyIdRepository(phone: number) {
    const result = await db.query<RechargeData>(`
                SELECT * FROM phones 
                WHERE id = $1;`, [phone]);
    return result.rows;
}


export async function getPhoneRepository(document: string) {
    const result = await db.query<PhoneData>(`SELECT * FROM phones WHERE cpf = $1;`, [document]);
    return result.rows;
}

export async function verifyNumberRepository(number: string) {
    const result = await db.query<RechargeData>(`
                SELECT * FROM phones 
                WHERE phone = $1;`, [number]);
    return result.rows;
}

export async function getRechargesRepository(number: number) {
    const result = await db.query<RechargeData>(`SELECT * FROM recharges WHERE phone_id = $1;`, [number])
    return result.rows;
}

export async function getSummaryRepository(document: string) {
    const result = await db.query<PhoneData>(
        `SELECT p.cpf AS document,
		json_agg(
		json_build_object(
		'number', p.phone,
		'name', p.name, 
		'description', p.description, 
			'carrier', json_build_object(
				'name', carriers.name, 
				'code', carriers.code), 
				'recharges',
				(SELECT json_agg(recharges)
					FROM recharges
					WHERE p.id = recharges.phone_id
					GROUP BY recharges.phone_id
					)						
				)) AS phones
        FROM phones p
        JOIN carriers ON p.carrier_id = carriers.id
        JOIN recharges ON phone_id = recharges.phone_id
        WHERE p.cpf = $1
		GROUP BY p.cpf;`, [document]);
    return result.rows;
}
