import { getHistories } from '../controllers/histories.controller.js';

export default (router) => {
  router.post('/histories', getHistories);
};
