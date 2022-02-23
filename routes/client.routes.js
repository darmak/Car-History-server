import {Router} from 'express';
import { createClient } from '../controllers/client.controller.js';

const clientRouter = Router();

clientRouter.post('/user', createClient);


export default clientRouter;