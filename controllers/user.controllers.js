import bcrypt from 'bcryptjs';
import User from '../models/index.js';

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    // Hash the password
    const mdphashed = await bcrypt.hashSync(password, 10);
    User.create({
        name,
        email,
        password: mdphashed,
    })
        .then((user) => {
            res.status(201).json({
                message: 'User registered successfully',
                user,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: 'Error registering user',
                error: err.message,
            });
        });
}

export const login = (req, res) => {}