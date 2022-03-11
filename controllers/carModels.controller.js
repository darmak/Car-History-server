import { CarModel } from '../models/CarModel.js';

export const getCarModels = async (req, res) => {
  try {
    const models = await CarModel.findAll();
    return res.json(models);
  } catch (e) {
    return res.json('Error: did not get models');
  }
};

export const addCarModel = async (req, res) => {
  try {
    const { model, carBrandId } = req.body;
    const newModel = await CarModel.create({ model, carBrandId });
    return res.json(newModel);
  } catch (e) {
    return res.json('Error: did not add model');
  }
};
