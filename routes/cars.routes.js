import { addCar, getSearchCars, getCar, getGarageCars } from '../controllers/cars.controller.js';

export default (router) => {
  router.post('/cars', addCar);
  router.get('/cars/search', getSearchCars);
  router.get('/cars/garage', getGarageCars);
  router.get('/cars/garage/:id', getCar);
};
