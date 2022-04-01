import { rolesPermissions, userRoles } from '../constans/rolePermission.js';
import { getPermissionByReq } from '../helpers/getPermissionByReq.js';
import { methodMap } from '../constans/methodMap.js';

export default (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  const role = req.user && req.user.role ? req.user.role : userRoles.unauthorized;
  const permission = getPermissionByReq(req.method, req.path, methodMap);
  const hasPermission = rolesPermissions[role].includes(permission);
  if (!hasPermission) {
    return res.status(403).json({ message: 'Error: did not have permissions' });
  }
  next();
};
