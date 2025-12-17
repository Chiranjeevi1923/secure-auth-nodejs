import express from 'express';
import { userLogin, userSignup } from '../controllers/user.controller.js';

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.send('Welcome to the User Authentication API!');
});

router.post('/signup', userSignup);

router.post('/login', userLogin);

export default router;