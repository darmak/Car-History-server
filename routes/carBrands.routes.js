import { getCarBrands } from '../controllers/carBrands.controller.js';

export default (router) => {
  router.post('/brands', getCarBrands);
};
