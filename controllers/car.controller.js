import { db } from "../db/db.js"

export const createCar = async (req, res) => {
	const {brand_id, model_id, year, vin, mileage, client_id} = req.body;
	const newCar = await db.query('INSERT INTO car (brand_id, model_id, year, vin, mileage, client_id) values ($1, $2, $3, $4, $5, $6) RETURNING *', 
		[brand_id, model_id, year, vin, mileage, client_id]
	);
	res.json(newCar.rows)
}

export const getOneCar = async (req, res) => {
	const vinQuery = req.body.vin;
	const users = await db.query('SELECT * FROM car where vin = $1', [vinQuery]);
	res.json(users.rows)
}

export const getClientCars = async (req, res) => {
	const clientId = req.params.id;
	const cars = await db.query('SELECT * FROM car where client_id = $1', [clientId]);
	res.json(cars.rows)
}

// export const updateCar = async (req, res) => {
// 	const {id, firstName, lastName, email} = req.body;
// 	const user = await db.query('UPDATE client set firstName = $1, lastName = $2, email = $3 where id = $4 RETURNING *',[firstName, lastName, email, id])
// 	res.json(user.rows);
// }


