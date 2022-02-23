import {Router} from 'express';
import { getClientCars, createCar, getOneCar } from '../controllers/car.controller.js';

const carRouter = Router();

carRouter.post('/car', createCar);
carRouter.get('/car/:id', getClientCars);
carRouter.get('/car', getOneCar);

export default carRouter;