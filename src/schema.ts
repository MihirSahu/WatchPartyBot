import mongoose, { mongo } from 'mongoose';

export const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    registerDate: {
        type: Date,
        required: true,
    },
});

export const event = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    userList: {
        type: [user],
    },
});