import { History } from '../models/History.js';

export const getCarHistories = async (req, res) => {
  try {
    const histories = await History.findAll({
      where: {
        carId: req.query.carId
      }
    });
    return res.json(histories);
  } catch (e) {
    return res.json('Error: did not get one car');
  }
};

export const addHistory = async (req, res) => {
  try {
    const { mileage, author, description, date, carId } = req.body;
    const newHistory = await History.create({
      mileage,
      author,
      description,
      date: date ? date : new Date(),
      carId
    });
    return res.json(newHistory);
  } catch (e) {
    return res.json('Error: did not add new history');
  }
};
