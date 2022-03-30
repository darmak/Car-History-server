import { addCar, getSearchCars, getGarageCars } from '../controllers/cars.controller.js';
import checkRoleMiddleware from '../middlewares/checkRoleMiddleware.js';

export default (router) => {
  router.post('/cars', addCar);
  router.get('/cars/search', getSearchCars);
  router.get('/cars/garage', checkRoleMiddleware, getGarageCars);
};
