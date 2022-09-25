import { user, event } from './schema';
import mongoose from 'mongoose';
import { EmbedBuilder } from 'discord.js';

const User = mongoose.model('User', user);
const Event = mongoose.model('Event', event);

// User Functions
export const userAdd = async (name: string, registerDate: Date) => {
    const newUser = new User({ name: name, registerDate: registerDate });
    newUser.save((err, doc) => {
        err ? console.log(err) : console.log(`Added ${name} to database with id ${doc._id}`);
    });
}

export const userMod = async (name?: string, newName?: string, date?: Date, newDate?: Date) => {
    if (name && newName) {
        await User.findOneAndUpdate({ name: name }, { name: newName }, { returnOriginal: false })
    }
    if (date && newDate) {
        await User.findOneAndUpdate({ date: date }, { date: newDate }, { returnOriginal: false });
    }
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

export const eventMod = async (name?: string, newName?: string, date?: Date, newDate?: string, newUser?: typeof user) => {
    if (name && newName) {
        await User.findOneAndUpdate({ name: name }, { name: newName }, { returnOriginal: false });
    }
    if (date && newDate) {
        await User.findOneAndUpdate({ date: date }, { date: newDate }, { returnOriginal: false });
    }
}

export const eventDel = async (name: string) => {
    await Event.deleteOne({ name: name });
    console.log(`Deleted ${name} from database.`);
}

// Poll
export const poll = () => {
    const exampleEmbed = new EmbedBuilder()
	    .setColor(0x0099FF)
	    .setTitle('CougarCS Watch Party Poll')
	    .addFields(
	    	{ name: 'Regular field title', value: 'Some value here' },
	    	{ name: '\u200B', value: '\u200B' },
	    	{ name: 'Inline field title', value: 'Some value here', inline: true },
	    	{ name: 'Inline field title', value: 'Some value here', inline: true },
	    )
	    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })

    return exampleEmbed;
}