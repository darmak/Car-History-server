import jwt from 'jsonwebtoken';
import config from 'config';
const { secretKey } = config.get('auth');

export default (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authorization error: token is absent' });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Authorization error: invalid token' });
      }
      req.user = decoded;
    });
  }
  next();
};
