import { getUser } from '../controllers/users.controller.js';

export default (router) => {
  router.get('/users/:id', getUser);
};
