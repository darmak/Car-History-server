import { registration, login } from '../controllers/users.controller.js';

export default (router) => {
  router.post('/registration', registration);
  router.post('/login', login);
};
