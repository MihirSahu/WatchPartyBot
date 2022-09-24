import { SlashCommandBuilder } from 'discord.js';

export const commands = [
	// Slash command names must be in lowercase
    new SlashCommandBuilder()
    	.setName('useradd')
    	.setDescription('Adds a user to the database')
    	.addStringOption(option =>
    		option.setName('name')
    			.setDescription('The name of the user')
    			.setRequired(true)),
    new SlashCommandBuilder()
    	.setName('userdel')
    	.setDescription('Deletes a user from the database')
    	.addStringOption(option =>
    		option.setName('name')
    			.setDescription('The name of the user')
    			.setRequired(true)),
];