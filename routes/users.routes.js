import { getUser, getAllUsers, deleteUser } from '../controllers/users.controller.js';

export default (router) => {
  router.get('/users/:id', getUser);
  router.get('/users', getAllUsers);
  router.delete('/users/:id', deleteUser);
};
