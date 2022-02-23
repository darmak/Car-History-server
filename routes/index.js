import usersRoutes from './users.routes.js';
import carsRoutes from './cars.routes.js';
import { Router } from 'express';

const router = Router();

carsRoutes(router);
usersRoutes(router);

export default router;
