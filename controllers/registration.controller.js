import { User } from '../models/User.js';
import bcrypt from 'bcrypt';

export const registration = async (req, res, next) => {
  try {
    const { name, email, password, user_role } = req.body;
    if (!email || !password) {
      return next();
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next();
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ name, email, user_role, hash_password: hashPassword });
    return res.json(user);
  } catch (e) {
    return res.json('Error: failed to register');
  }
};
