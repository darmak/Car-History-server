import { User } from '../models/User.js';
import bcrypt from 'bcrypt';

export const registration = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!email || !password) {
    return res.json('Registration error: invalid email or password');
  }
  try {
    if (await User.findOne({ where: { email } })) {
      return res.json('Registration error: user already exist');
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ name, email, role, hash_password: hashPassword });
    return res.json(user);
  } catch (e) {
    return res.json('Registration error: failed to register');
  }
};
