import { Car } from '../models/Car.js';
import { CarBrand } from '../models/CarBrand.js';
import { CarModel } from '../models/CarModel.js';
import { Sequelize } from 'sequelize';
const { Op } = Sequelize;

export const getSearchCars = async (req, res) => {
  try {
    const cars = await Car.findAll({
      where: {
        vin: {
          [Op.like]: Sequelize.literal(`'%${req.query.vin}%'`)
        }
      },
      include: [
        { model: CarBrand, attributes: ['brand'] },
        { model: CarModel, attributes: ['model'] }
      ],
      limit: req.query.limit
    });
    return res.json(cars);
  } catch (e) {
    return res.json('Error: did not get one car');
  }
};

export const getGarageCars = async (req, res) => {
  console.log(req);
  try {
    const cars = await Car.findAll({
      where: {
        userId: req.query.userId
      },
      include: [
        { model: CarBrand, attributes: ['brand'] },
        { model: CarModel, attributes: ['model'] }
      ]
    });
    return res.json(cars);
  } catch (e) {
    return res.json('Error: did not get user cars');
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
