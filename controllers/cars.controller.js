import { Cars } from '../models/cars.js';

export const getOneCar = async (req, res) => {
  try {
    const { vin } = req.body;
    const car = await Cars.findOne({
      where: { vin }
    });
    return res.json(car);
  } catch (e) {
    return res.json('Error: did not get one car');
  }
};

export const addCar = async (req, res) => {
  try {
    const { mileage, year, vin, userId, carBrandId, carModelId } = req.body;
    const newCar = await Cars.create({ mileage, year, vin, userId, carBrandId, carModelId });
    return res.json(newCar);
  } catch (e) {
    return res.json('Error: did not add car');
  }
};

export const getCars = async (req, res) => {
  try {
    const cars = await Cars.findAll();
    return res.json(cars);
  } catch (e) {
    return res.json('Error: did not get all cars');
  }
};
