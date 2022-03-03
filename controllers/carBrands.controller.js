import { CarBrands } from '../models/car.brands.js';

export const getCarBrands = async (req, res) => {
  try {
    const brands = await CarBrands.findAll();
    return res.json(brands);
  } catch (e) {
    return res.json('Ошибка');
  }
};
