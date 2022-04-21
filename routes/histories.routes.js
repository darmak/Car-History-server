import { getCarHistories, addHistory } from '../controllers/histories.controller.js';

export default (router) => {
  router.get('/histories/:id', getCarHistories);
  router.post('/histories', addHistory);
};
