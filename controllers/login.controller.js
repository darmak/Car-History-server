import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
import { User } from '../models/User.js';
import { rolesPermissions } from '../constans/rolePermission.js';

const { secretKey } = config.get('auth');

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.json('Error: User does not exist');
    }
    let comparePassword = bcrypt.compareSync(password, user.hash_password);
    if (!comparePassword) {
      return res.json('Error: invalid password');
    }
    const token = jwt.sign(
      { id: user.id, role: user.role, permissions: rolesPermissions[user.role] },
      secretKey,
      {
        expiresIn: '1h'
      }
    );

    return res.json({
      user: { id: user.id, role: user.role },
      token
    });
  } catch (e) {
    return res.json('Error: failed to login');
  }
};
