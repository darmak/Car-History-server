import { Car } from '../models/Car.js';
import { CarBrand } from '../models/CarBrand.js';
import { CarModel } from '../models/CarModel.js';

export const getCars = async (req, res) => {
  try {
    const car = await Car.findAll({
      where: req.query,
      include: [
        { model: CarBrand, attributes: ['brand'] },
        { model: CarModel, attributes: ['model'] }
      ]
    });
    return res.json(car);
  } catch (e) {
    return res.json('Error: did not get one car');
  }
};

export const addCar = async (req, res) => {
  try {
    const { mileage, year, vin, userId, carBrandId, carModelId } = req.body;
    const newCar = await Car.create({
      mileage,
      year,
      vin: vin.toUpperCase(),
      userId,
      carBrandId,
      carModelId
    });
    return res.json(newCar);
  } catch (e) {
    return res.json('Error: did not add car');
  }
};
