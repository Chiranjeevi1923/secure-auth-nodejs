import crypto from 'node:crypto';
import { promisify } from 'node:util';

const scryptAsync = promisify(crypto.scrypt);

export const hashPassword = async (password) => {
    const salt = crypto.randomBytes(16).toString('hex');

    const derivedKey = await scryptAsync(password, salt, 64);

    return {
        salt,
        hash: derivedKey.toString('hex')
    };
};

export const verifyPassword = async (password, salt, storedHash) => {
    const derivedKey = await scryptAsync(password, salt, 64);

    return crypto.timingSafeEqual(
        Buffer.from(storedHash, 'hex'),
        derivedKey
    );
};
