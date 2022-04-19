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

export const editUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const findUserById = await User.findByPk(id);
    if (!findUserById) {
      return res.status(400).json({ message: 'Edit error: person not found.Did not edit user' });
    }
    User.update(
      { name, email },
      {
        where: {
          id
        }
      }
    );
    return res.json({ message: 'Successfully edited' });
  } catch (e) {
    return res.status(400).json({ message: 'Edit error: did not edit user' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
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
