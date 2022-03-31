import { rolesPermissions, userRoles } from '../constans/common.js';

export default (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  const role = req.user && req.user.user_role ? req.user.user_role : userRoles.unauthorized;
  const permission = getPermissionByReq(req.method, req.path);
  const hasPermission = rolesPermissions[role].includes(permission);
  if (!hasPermission) {
    return res.status(403).json({ message: 'Error: did not have permissions' });
  }
  next();
};

const methodMap = {
  GET: 'read',
  POST: 'create',
  PUT: 'edit',
  DELETE: 'delete',
  PATCH: 'edit'
};

function getPermissionByReq(method, path) {
  return `${path.split('/')[1]}_${methodMap[method]}`;
}
