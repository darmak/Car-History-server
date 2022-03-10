import { Cars } from '../models/Car.js';
import { CarBrands } from '../models/CarBrand.js';
import { CarModels } from '../models/CarModel.js';

export const getCars = async (req, res) => {
  try {
    const car = await Cars.findAll({
      where: req.query,
      include: [
        { model: CarBrands, attributes: ['brand'] },
        { model: CarModels, attributes: ['model'] }
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
    const newCar = await Cars.create({
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
