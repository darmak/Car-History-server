import { User } from '../models/User.js';

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id }
    });
    return res.json(user);
  } catch (e) {
    return res.status(400).json({ message: 'Error: did not get user' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (e) {
    return res.status(400).json({ message: 'Error: did not get all users' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findUserById = await User.findByPk(id);
    if (!findUserById) {
      return res
        .status(400)
        .json({ message: 'Delete error: person not found.Did not delete user' });
    }
    const deleteUser = findUserById.destroy();
    if (!deleteUser) {
      return res.status(400).json({ message: 'Delete error: person failed delete' });
    }
    return res.json({ message: 'Successfully deleted' });
  } catch (e) {
    return res.status(400).json({ message: 'Delete error: did not delete user(unexpected user)' });
  }
};
