import { CarModels } from '../models/carModels.js';

export const getCarModels = async (req, res) => {
  try {
    const models = await CarModels.findAll();
    return res.json(models);
  } catch (e) {
    return res.json('Error: did not get models');
  }
};

export const addCarModel = async (req, res) => {
  try {
    const { model, carBrandId } = req.body;
    const newModel = await CarModels.create({ model, carBrandId });
    return res.json(newModel);
  } catch (e) {
    return res.json('Error: did not add model');
  }
};
