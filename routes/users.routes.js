import { createUser } from '../controllers/users.controller.js';

export default (router) => {
  router.post('/users', createUser);
};
