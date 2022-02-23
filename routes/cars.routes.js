import { getClientCars, createCar, getOneCar } from '../controllers/cars.controller.js';

export default (router) => {
  router.post('/cars', createCar);
  router.get('/cars/:id', getClientCars);
  router.get('/cars', getOneCar);
};
