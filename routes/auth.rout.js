import express from 'express';
import { register, login } from '../controllers/user.controllers.js';
import {validate} from '../middlewares/validation.js';
import {registerSchema} from '../validations/authValidation.js';

const router = express.Router();

// Register route
router.post('/register', validate(registerSchema), register);

// Login route
router.post('/login', login);

export default router;