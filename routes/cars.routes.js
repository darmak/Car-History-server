import { addCar, getSearchCars, getGarageCars } from '../controllers/cars.controller.js';

export default (router) => {
  router.post('/cars', addCar);
  router.get('/cars/search', getSearchCars);
  router.get('/cars/garage', getGarageCars);
};
