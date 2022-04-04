import { Router } from 'express';

import usersRoutes from './users.routes.js';
import authorizationRoutes from './authorization.routes.js';
import carsRoutes from './cars.routes.js';
import historiesRoutes from './histories.routes.js';
import carBrandsRoutes from './carBrands.routes.js';
import carModelsRoutes from './carModels.routes.js';

const router = Router();

usersRoutes(router);
authorizationRoutes(router);
carsRoutes(router);
historiesRoutes(router);
carBrandsRoutes(router);
carModelsRoutes(router);

export default router;
