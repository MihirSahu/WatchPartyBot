import { Client, ClientOptions } from "discord.js";
import * as dotenv from 'dotenv';
import ready from './ready';

dotenv.config();

const token = process.env.TOKEN;
const secret = process.env.CLIENT_SECRET;

const client = new Client({
    intents: []
});

ready(client);
client.login(token);

//console.log(client);
