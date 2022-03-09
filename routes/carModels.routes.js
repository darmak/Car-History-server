import { getCarModels, addCarModel } from '../controllers/carModels.controller.js';

export default (router) => {
  router.get('/models', getCarModels);
  router.post('/models', addCarModel);
};
