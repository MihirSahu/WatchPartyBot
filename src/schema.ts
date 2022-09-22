import mongoose from 'mongoose';

export const user = new mongoose.Schema({
    name: String,
    registerDate: Date,
});