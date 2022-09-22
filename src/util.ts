import { user } from './schema';
import mongoose from 'mongoose';

const User = mongoose.model('User', user);

export const userAdd = async (name: string) => {
    const newUser = new User({ name: "Mihir" });
    await newUser.save();
}