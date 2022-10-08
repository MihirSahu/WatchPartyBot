import { user, event, anime } from './schema';
import mongoose from 'mongoose';
import { EmbedBuilder } from 'discord.js';
import { getAnimeInfo } from './scraper';

const User = mongoose.model('User', user);
const Event = mongoose.model('Event', event);
const Anime = mongoose.model('Anime', anime);

export interface user {
    name: string;
    registerDate: Date;
}

export interface anime {
    name: string;
    seasons: number;
    startDate: Date;
    endDate: Date;
}

export interface event {
    name: String;
    date: Date;
}

// Find Function
export const userSearch = async (name?: string, registerDate?: Date) => {
    if (name !== undefined) {
        return User.where('name').equals(name);
    }
    if (registerDate !== undefined) {
        return User.where('registerDate').equals(registerDate);
    }
}

export const animeSearch = async (name?: string, seasons?: number, startDate?: Date, endDate?: Date) => {
    if (name !== undefined) {
        return Anime.where('name').equals(name);
    }
    if (seasons !== undefined) {
        return Anime.where('seasons').equals(seasons);
    }
    if (startDate !== undefined) {
        return Anime.where('startDate').equals(startDate);
    }
    if (endDate !== undefined) {
        return Anime.where('endDate').equals(endDate);
    }
}

export const eventSearch = async (name?: String, date?: Date) => {
    if (name !== undefined) {
        return Event.where('name').equals(name);
    }
    if (date !== undefined) {
        return Event.where('date').equals(date);
    }
}

// User Functions
export const userAdd = async (user: user) => {
    const newUser = new User({ name: user.name, registerDate: user.registerDate });
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

// Anime Functions
export const animeAdd = async (anime: anime) => {
    const newAnime = new Anime({ name: anime.name, seasons: anime.seasons, startDate: anime.startDate, endDate: anime.endDate})
    newAnime.save((err, doc) => {
        err ? console.log(err) : console.log(`Added ${name} to database with id ${doc._id}`);
    })
}

export const animeMod = async (name: string, seasons: number, startDate: Date, endDate: Date) => {
}

export const animeDel = async (name: string, seasons: number, startDate: Date, endDate: Date) => {
}

// Event Functions
export const eventAdd = async (event: event) => {
    const newEvent = new Event({ name: event.name, date: event.date });
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
const field_creator = async (animeId_arr: string[]) => {
    let fields = [];

    for (let id of animeId_arr) {
        const data: any = await getAnimeInfo(id);
        fields.push({
            name: data?.["data"]?.["data"]?.["title"],
            value: data?.["data"]?.["data"]?.["source"],
            inline: true,
        });
    }

    return fields;
}
export const poll = async (animeId_arr: string[]) => {
    const exampleEmbed = {
        color: 0x0099ff,
	    title: 'CougarCS Watch Party',
	    author: {
	    	name: 'CougarCS Watch Party Bot',
	    	icon_url: 'https://i.imgur.com/AfFp7pu.png',
	    	url: 'https://discord.js.org',
	    },
	    fields: await field_creator(animeId_arr),
	    timestamp: new Date().toISOString(),
	    footer: {
	    	text: 'Some footer text here',
	    	icon_url: 'https://i.imgur.com/AfFp7pu.png',
	    },
    }
    return exampleEmbed;
}