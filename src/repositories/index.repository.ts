import db from "../database/database";


export async function createPhoneRepository(cpf: string, phone: string, carrier: number, name: string, description: string) {
    const result = await db.query(`
        INSERT INTO phones (cpf, phone, carrier_id, name, description)
        VALUES ($1, $2, $3, $4, $5);`, [cpf, phone, carrier, name, description]);
    return result;
}

export async function verifyDocumentRepository(cpf: string) {
    const result = await db.query(`
                SELECT * FROM phones 
                WHERE cpf = $1;`, [cpf]);
    return result.rows;
}

export async function verifyPhoneRepository(phone: string) {
    const result = await db.query(`
                SELECT * FROM phones 
                WHERE phone = $1;`, [phone]);
    return result.rows;
}





//  export async function createRecharge(name, phone, cpf) {
//     const result = await db.query(`
//          INSERT INTO phones (name, phone, cpf)
//          VALUES ($1, $2, $3);`, [name, phone, cpf]);
//      return result;
//  }

//  export async function getPhones(id) {
//     const result = await db.query(`SELECT * FROM phones WHERE contact_id = $1;`, [id]);
//     return result.rows;
// }

// export async function getRegarches(id) {
//     const result = await db.query(`SELECT * FROM recharges WHERE phone_id = $1;`, [id]);
//     return result.rows;
// }
