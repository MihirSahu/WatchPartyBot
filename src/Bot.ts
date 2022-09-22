const { Client, ClientOptions, REST, SlashCommandBuilder, Routes, ChatInputCommandInteraction} = require('discord.js');
import * as dotenv from 'dotenv';
import ready from './ready';
import { commands } from './commands';
import { userAdd } from './util';

dotenv.config();

const token = process.env.TOKEN;
const secret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const client = new Client({
    intents: []
});

ready(client);
client.login(token);

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data: any) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);

client.on('interactionCreate', async (interaction: any) => {
	if (!interaction.isChatInputCommand()) return;

        const { commandName } = interaction;
        let message;
        switch(commandName){
            case 'echo':
                //message = await interaction.fetchReply();
                await interaction.reply("pong");
                break;
            case 'userAdd':
                await userAdd("Mihir");
                await interaction.reply("User added!");
        }
});