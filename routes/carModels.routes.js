import { getCarModels } from '../controllers/carModels.controller.js';

export default (router) => {
  router.post('/models', getCarModels);
};
