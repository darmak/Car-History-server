import { db } from "../db/db.js"

export const createClient = async (req, res) => {
	const {firstName, lastName, email, hash_password, user_role} = req.body;
	const newUser = await db.query(`INSERT INTO client (first_name, last_name, email, hash_password, user_role) values ($1, $2, $3, $4, $5) RETURNING *`, [firstName, lastName, email, hash_password, user_role])
	res.json(newUser.rows);
}


