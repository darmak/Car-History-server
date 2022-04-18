import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
import { User } from '../models/User.js';
import { rolesPermissions } from '../constants/rolePermission.js';

const { secretKey } = config.get('auth');

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Error: User does not exist' });
    }
    let comparePassword = bcrypt.compareSync(password, user.hash_password);
    if (!comparePassword) {
      return res.status(400).json({ message: 'Error: invalid password' });
    }
    const tokenUser = { id: user.id, role: user.role, permissions: rolesPermissions[user.role] };
    const token = jwt.sign(tokenUser, secretKey, {
      expiresIn: '1h'
    });

    return res.json({
      user: tokenUser,
      token
    });
  } catch (e) {
    return res.status(400).json({ message: 'Error: failed to login' });
  }
};
