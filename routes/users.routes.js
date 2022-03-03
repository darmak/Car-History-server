import { registration, login, check } from '../controllers/users.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';

export default (router) => {
  router.post('/registration', registration);
  router.post('/login', login);
  router.get('/auth', authMiddleware, check);
};
