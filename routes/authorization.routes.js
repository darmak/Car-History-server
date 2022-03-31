import { login } from '../controllers/login.controller.js';
import { registration } from '../controllers/registration.controller.js';

export default (router) => {
  router.post('/registration', registration);
  router.post('/login', login);
};
