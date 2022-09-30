import { Client } from "discord.js";
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
const mongo_uri = process.env.MONGO_URI;

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        console.log(`${client.user.username} is online`);

        mongoose.connect(mongo_uri ? mongo_uri : "")
            .then(() => {
                console.log(`CONNECTED TO MONGO!`);
            })
            .catch((err) => {
                console.log(`OH NO! MONGO CONNECTION ERROR!`);
                console.log(err);
        })
    });
};
