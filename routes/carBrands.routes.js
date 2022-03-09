import { getCarBrands, addCarBrand } from '../controllers/carBrands.controller.js';

export default (router) => {
  router.get('/brands', getCarBrands);
  router.post('/brands', addCarBrand);
};
