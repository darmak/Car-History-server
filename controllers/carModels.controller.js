import { CarModel } from '../models/CarModel.js';

export const getCarModels = async (req, res) => {
  try {
    const models = await CarModel.findAll({
      where: {
        carBrandId: req.query.carBrandId
      }
    });
    return res.json(models);
  } catch (e) {
    return res.json({ message: 'Error: did not get models' });
  }
};

export const addCarModel = async (req, res) => {
  try {
    const { model, carBrandId } = req.body;
    const newModel = await CarModel.create({ model, carBrandId });
    return res.json(newModel);
  } catch (e) {
    return res.json({ message: 'Error: did not add model' });
  }
};
