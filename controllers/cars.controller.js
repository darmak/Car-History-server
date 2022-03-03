import { Cars } from '../models/cars.js';

export const getOneCar = async (req, res) => {
  try {
    const { vin } = req.body;
    const car = await Cars.findOne({
      where: { vin }
    });
    return res.json(car);
  } catch (e) {
    return res.json('Ошибка');
  }
};

export const addCar = async (req, res) => {
  try {
    const { mileage, year, vin, userId, carBrandId, carModelId } = req.body;
    const newCar = await Cars.create({ mileage, year, vin, userId, carBrandId, carModelId });
    return res.json(newCar);
  } catch (e) {
    return res.json('Ошибка');
  }
};

export const getCars = async (req, res) => {
  try {
    const cars = await Cars.findAll();
    return res.json(cars);
  } catch (e) {
    return res.json('Ошибка');
  }
};
// export const createCar = async (req, res) => {
//   const { brand_id, model_id, year, vin, mileage, client_id } = req.body;
//   const newCar = await sequelize.query(
//     'INSERT INTO car (brand_id, model_id, year, vin, mileage, client_id) values ($1, $2, $3, $4, $5, $6) RETURNING *',
//     [brand_id, model_id, year, vin, mileage, client_id]
//   );
//   res.json(newCar.rows);
// };

// export const getOneCar = async (req, res) => {
//   const vinQuery = req.body.vin;
//   const users = await sequelize.query('SELECT * FROM car where vin = $1', [vinQuery]);
//   res.json(users.rows);
// };

// export const getClientCars = async (req, res) => {
//   const type = sequelize.cars.findAll();
//   return res.json(type);
//   // const clientId = req.params.id;
//   // const cars = await sequelize.query('SELECT * FROM car where client_id = $1', [clientId]);
//   // res.json(cars.rows);
// };

// // export const updateCar = async (req, res) => {
// // 	const {id, firstName, lastName, email} = req.body;
// // 	const user = await sequelize.query('UPDATE client set firstName = $1, lastName = $2, email = $3 where id = $4 RETURNING *',[firstName, lastName, email, id])
// // 	res.json(user.rows);
// // }
