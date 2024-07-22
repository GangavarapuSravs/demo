import express from 'express';
 // Adjust the import path as needed
import hospitalRoute from './hospital.route';

const routes = express.Router();

routes.use('/',hospitalRoute)

export default routes;
