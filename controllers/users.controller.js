import { Users } from '../models/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
const { secretKey } = config.get('auth');

const generateJWT = (id, email, role) => {
  return jwt.sign({ id, email, role }, secretKey, {
    expiresIn: '1h'
  });
};

export const registration = async (req, res, next) => {
  try {
    const { name, email, password, user_role } = req.body;
    if (!email || !password) {
      return next();
    }
    const candidate = await Users.findOne({ where: { email } });
    if (candidate) {
      return next();
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await Users.create({ name, email, user_role, hash_password: hashPassword });
    const token = generateJWT(user.id, user.email, user.user_role);
    return res.json({ token });
  } catch (e) {
    return res.json('Error: failed to register');
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return next();
    }
    let comparePassword = bcrypt.compareSync(password, user.hash_password);
    if (!comparePassword) {
      return next();
    }
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({ token });
  } catch (e) {
    return res.json('Error: failed to login');
  }
};

export const check = async (req, res) => {
  const token = generateJWT(req.user.id, req.user.email, req.user.user_role);
  return res.json({ token });
};
