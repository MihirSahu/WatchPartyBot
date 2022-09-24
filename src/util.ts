import { user } from './schema';
import mongoose from 'mongoose';

const User = mongoose.model('User', user);

export const userAdd = async (name: string) => {
    const newUser = new User({ name: name });
    newUser.save((err, doc) => {
        err ? console.log(err) : console.log(`Added ${name} to database with id ${doc._id}`);
    });
}

export const userDel = async (name: string) => {
    await User.deleteOne({ name: name });
    console.log(`Deleted ${name} from database.`);
}