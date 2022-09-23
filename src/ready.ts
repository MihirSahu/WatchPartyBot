import { Client } from "discord.js";
import mongoose from 'mongoose';

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        console.log(`${client.user.username} is online`);

        mongoose.connect('mongodb://localhost:27017/WatchParty', () => console.log("Connected to database"));
    });
};
