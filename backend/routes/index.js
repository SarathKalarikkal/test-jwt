import express from 'express';
import userRoutes from './v1/user.routes.js';


const router = express.Router();

router.use('/v1/users', userRoutes);


export default router;