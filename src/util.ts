import { user, event } from './schema';
import mongoose from 'mongoose';

const User = mongoose.model('User', user);
const Event = mongoose.model('Event', event);

// User Functions
export const userAdd = async (name: string, registerDate: Date) => {
    const newUser = new User({ name: name, registerDate: registerDate });
    newUser.save((err, doc) => {
        err ? console.log(err) : console.log(`Added ${name} to database with id ${doc._id}`);
    });
}

export const userMod = async (name?: string, date?: Date) => {
}

export const userDel = async (name: string) => {
    await User.deleteOne({ name: name });
    console.log(`Deleted ${name} from database.`);
}

// Event Functions
export const eventAdd = async (name: String, date: Date) => {
    const newEvent = new Event({ name: name, date: date });
    newEvent.save((err, doc) => {
        err ? console.log(err) : console.log(`Added ${name} to database with id ${doc._id}`);
    });
}

export const eventMod = async (name?: string, date?: Date, userList?: [typeof user]) => {
}

export const eventDel = async (name: string) => {
    await Event.deleteOne({ name: name });
    console.log(`Deleted ${name} from database.`);
}