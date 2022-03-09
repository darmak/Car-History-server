import { addCar, getCars, getOneCar } from '../controllers/cars.controller.js';

export default (router) => {
  router.post('/cars', addCar);
  router.get('/cars', getCars);
  router.get('/car', getOneCar);
};
