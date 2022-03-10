import { Histories } from '../models/History.js';

export const getHistories = async (req, res) => {
  try {
    const histories = await Histories.findAll();
    return res.json(histories);
  } catch (e) {
    return res.json('Error: did not get histories');
  }
};
