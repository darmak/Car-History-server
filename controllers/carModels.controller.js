import { CarModels } from '../models/carModels.js';

export const getCarModels = async (req, res) => {
  try {
    const models = await CarModels.findAll();
    return res.json(models);
  } catch (e) {
    return res.json('Error: did not get models');
  }
};
