import { History } from '../models/History.js';

export const getCarHistories = async (req, res) => {
  const { id } = req.params;
  try {
    const histories = await History.findAll({
      where: {
        carId: id
      }
    });
    return res.json(histories);
  } catch (e) {
    return res.status(400).json({ message: 'Error: did not get car histories' });
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
    return res.status(400).json({ message: 'Error: did not add new history' });
  }
};
