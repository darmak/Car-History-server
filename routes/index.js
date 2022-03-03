import usersRoutes from './users.routes.js';
import carsRoutes from './cars.routes.js';
import historiesRoutes from './histories.routes.js';
import carBrandsRoutes from './carBrands.routes.js';
import carModelsRoutes from './carModels.routes.js';
import { Router } from 'express';

const router = Router();

usersRoutes(router);
carsRoutes(router);
historiesRoutes(router);
carBrandsRoutes(router);
carModelsRoutes(router);

export default router;
