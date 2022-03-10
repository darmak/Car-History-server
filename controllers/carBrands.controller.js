import { CarBrands } from '../models/CarBrand.js';

export const getCarBrands = async (req, res) => {
  try {
    const brands = await CarBrands.findAll();
    return res.json(brands);
  } catch (e) {
    return res.json('Error: did not get brands');
  }
};

export const addCarBrand = async (req, res) => {
  try {
    const { brand } = req.body;
    const newBrand = await CarBrands.create({ brand });
    return res.json(newBrand);
  } catch (e) {
    return res.json('Error: did not add brand');
  }
};
