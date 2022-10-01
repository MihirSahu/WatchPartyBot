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

export const anime = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    seasons: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
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