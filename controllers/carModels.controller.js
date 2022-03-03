import { CarModels } from '../models/car.models.js';

export const getCarModels = async (req, res) => {
  try {
    const models = await CarModels.findAll();
    return res.json(models);
  } catch (e) {
    return res.json('Ошибка');
  }
};
