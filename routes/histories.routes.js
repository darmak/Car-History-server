import { getCarHistories, addHistory } from '../controllers/histories.controller.js';

export default (router) => {
  router.get('/histories', getCarHistories);
  router.post('/histories', addHistory);
};
