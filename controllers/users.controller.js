import { User } from '../models/User.js';
import { userRoles } from '../constans/rolePermission.js';

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

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        role: userRoles.user
      }
    });
    return res.json(users);
  } catch (e) {
    return res.json({ message: 'Error: did not get all users' });
  }
};
