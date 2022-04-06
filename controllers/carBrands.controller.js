import { CarBrand } from '../models/CarBrand.js';

export const getCarBrands = async (req, res) => {
  try {
    const brands = await CarBrand.findAll();
    return res.json(brands);
  } catch (e) {
    return res.status(400).json({ message: 'Error: did not get brands' });
  }
};

export const addCarBrand = async (req, res) => {
  try {
    const { brand } = req.body;
    const newBrand = await CarBrand.create({ brand });
    return res.json(newBrand);
  } catch (e) {
    return res.status(400).json({ message: 'Error: did not add brand' });
  }
};
