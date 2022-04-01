import authMiddleware from './authMiddleware.js';
import permissionMiddleware from './permissionMiddleware.js';

export default (app) => {
  app.use(authMiddleware);
  app.use(permissionMiddleware);
};
