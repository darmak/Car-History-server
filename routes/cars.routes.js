import { addCar, getCars } from '../controllers/cars.controller.js';

export default (router) => {
  router.post('/cars', addCar);
  // router.get('/cars/:id', getClientCars);
  router.get('/cars', getCars);
};
