import express from 'express';
import { router } from './routes';
import  swaggerUI  from "swagger-ui-express";
import swaggerDocument from '../swagger.json';

const app = express();
app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

export { app }