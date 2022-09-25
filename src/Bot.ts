const { Client, ClientOptions, REST, SlashCommandBuilder, Routes, ChatInputCommandInteraction, EmbedBuilder } = require('discord.js');
import * as dotenv from 'dotenv';
import ready from './ready';
import { commands } from './commands';
import { userAdd, userDel, userMod, eventAdd, eventMod, eventDel, poll } from './util';
import { channel } from 'diagnostics_channel';

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
            case 'useradd':
                message = await interaction.options.getString("name");
                await userAdd(message, new Date);
                await interaction.reply("User added!");
                break;
            case 'usermod':
                let name = await interaction.options.getString("name");
                let newName = await interaction.options.getString("newname");
                let newDate = await interaction.options.getString("newdate");
                await userMod(name, newName, newDate);
                await interaction.reply("User modified!");
                break;
            case 'userdel':
                message = await interaction.options.getString("name");
                await userDel(message);
                await interaction.reply("User deleted!");
                break;
            case 'eventadd':
                message = await interaction.options.getString("name");
                await eventAdd(message, new Date);
                await interaction.reply("Event added!");
                break;
            case 'eventmod':
                name = await interaction.options.getString("name");
                newName = await interaction.options.getString("newname");
                newDate = await interaction.options.getString("newdate");
                await eventMod(name, newName, newDate);
                await interaction.reply("Event modified!");
                break;
            case 'eventdel':
                message = await interaction.options.getString("name");
                await eventDel(message);
                await interaction.reply("Event deleted!");
                break;
            case 'poll':
                await interaction.reply({ embeds: [poll()] });
                break;
        }
});