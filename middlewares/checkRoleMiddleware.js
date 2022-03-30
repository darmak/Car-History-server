// import jwt from 'jsonwebtoken';
// import config from 'config';
// const { secretKey } = config.get('auth');
import { rolesPermissions } from '../constans/common.js';

export default (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  console.log(req.method);
  const { role } = req.query;
  const route = req.route.path.split('/');
  const table = route[1];
  console.log('WORK WORK');
  // console.log(rolesPermissions[role]);
  const hasPermission = rolesPermissions[role].includes(`${table}_${req.method.toLowerCase()}`);
  // console.log('Boolean', hasPermission);
  if (!hasPermission) {
    return res.status(401).json({ message: 'Error: did not authorization' });
  }
  next();
};
