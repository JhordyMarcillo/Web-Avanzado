import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from './config.js';

// Definir esquema de usuario
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Crear modelo de usuario
const User = mongoose.model('User', userSchema);

export class UserRepository {
    static async create({ username, password }) {
        Validation.username(username);
        Validation.password(password);

        const existingUser = await User.findOne({ username });
        if (existingUser) throw new Error('El username ya existe');

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = new User({
            username,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        return savedUser._id;
    }

    static async login({ username, password }) {
        Validation.username(username);
        Validation.password(password);

        const user = await User.findOne({ username });
        if (!user) throw new Error('Usuario no existe');

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error('Contraseña no válida');

        // Retornar datos públicos del usuario
        const { password: _, ...publicUser } = user.toObject();
        return publicUser;
    }
}

class Validation {
    static username(username) {
        if (typeof username != 'string') throw new Error('El username debe ser un string');
        if (username.length < 3) throw new Error('El username debe tener al menos 3 caracteres');
    }

    static password(password) {
        if (typeof password != 'string') throw new Error('El password debe ser un string');
        if (password.length < 3) throw new Error('El password debe tener al menos 3 caracteres');
    }
}
