import bcrypt from 'bcrypt';
import config from 'config';
import { User } from '../models/User.js';

const { salt } = config.get('registration');

export const registration = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Registration error: invalid email or password' });
  }
  try {
    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ message: 'Registration error: user already exist' });
    }
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ name, email, role, hash_password: hashPassword });
    return res.json(user);
  } catch (e) {
    return res.status(400).json({ message: 'Registration error: failed to register' });
  }
};
