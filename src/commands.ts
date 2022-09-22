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
    	.setName('echo2')
    	.setDescription('Replies with your input!')
    	.addStringOption(option =>
    		option.setName('input')
    			.setDescription('The input to echo back')
    			.setRequired(true)),
]
.map(command => command.toJSON());