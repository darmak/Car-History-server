import { getUser, getAllUsers, deleteUser, editUser } from '../controllers/users.controller.js';

export default (router) => {
  router.get('/users/:id', getUser);
  router.get('/users', getAllUsers);
  router.delete('/users/:id', deleteUser);
  router.put('/users/:id', editUser);
};
