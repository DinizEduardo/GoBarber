import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import fileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // rotas antes disso não terão esse middleware

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), fileController.store);

routes.get('/providers', ProviderController.index);

routes.post('/appointment', AppointmentController.store);

export default routes;
