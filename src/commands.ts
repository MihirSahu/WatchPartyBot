import { SlashCommandBuilder } from 'discord.js';

export const commands = [
    new SlashCommandBuilder()
    	.setName('echo')
    	.setDescription('Replies with your input!')
    	.addStringOption(option =>
    		option.setName('input')
    			.setDescription('The input to echo back')
    			.setRequired(true)),
    new SlashCommandBuilder()
    	.setName('userAdd')
    	.setDescription('Adds a user to the database')
    	.addStringOption(option =>
    		option.setName('name')
    			.setDescription('The name of the user')
    			.setRequired(true)),
]
.map(command => command.toJSON());