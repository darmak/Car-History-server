import { User } from '../models/User.js';

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.json(user);
  } catch (e) {
    return res.json({ message: 'Error: did not get user' });
  }
};
