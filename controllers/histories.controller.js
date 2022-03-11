import { History } from '../models/History.js';

export const getHistories = async (req, res) => {
  try {
    const histories = await History.findAll();
    return res.json(histories);
  } catch (e) {
    return res.json('Error: did not get histories');
  }
};
