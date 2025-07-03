import express from 'express';
import { registerUser,loginUser,refreshAccessToken, getUserProfile } from '../../controllers/userController.js';
import { protect } from '../../middlewares/auth.middleware.js';

const router = express.Router()


router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/refresh',refreshAccessToken)
router.get('/profile',protect,getUserProfile)

export default router;