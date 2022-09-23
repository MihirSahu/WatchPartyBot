import { SlashCommandBuilder } from 'discord.js';

export const commands = [
	// Slash command names must be in lowercase
    new SlashCommandBuilder()
    	.setName('echo')
    	.setDescription('Replies with your input!')
    	.addStringOption(option =>
    		option.setName('input')
    			.setDescription('The input to echo back')
    			.setRequired(true)),
    new SlashCommandBuilder()
    	.setName('useradd')
    	.setDescription('Adds a user to the database')
    	.addStringOption(option =>
    		option.setName('name')
    			.setDescription('The name of the user')
    			.setRequired(true)),
];