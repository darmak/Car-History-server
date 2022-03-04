import jwt from 'jsonwebtoken';
import config from 'config';
const { secretKey } = config.get('auth');

export default (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      res.status(401).json({ message: 'Error: did not authorization(have not token)' });
    }
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Error: did not authorization' });
  }
};
