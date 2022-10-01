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
    	.setName('usermod')
    	.setDescription('Modifies a user\'s details on the database')
    	.addStringOption(option =>
    		option.setName('name')
    			.setDescription('The name of the user')
				.setRequired(true))
    	.addStringOption(option =>
    		option.setName('newname')
    			.setDescription('The new name of the user'))
    	.addStringOption(option =>
    		option.setName('newdate')
    			.setDescription('The new date of the user')),
    new SlashCommandBuilder()
    	.setName('userdel')
    	.setDescription('Deletes a user from the database')
    	.addStringOption(option =>
    		option.setName('name')
    			.setDescription('The name of the user')
    			.setRequired(true)),
    new SlashCommandBuilder()
    	.setName('eventadd')
    	.setDescription('Adds an event to the database')
    	.addStringOption(option =>
    		option.setName('name')
    			.setDescription('The name of the event')
    			.setRequired(true)),
    new SlashCommandBuilder()
    	.setName('eventmod')
    	.setDescription('Modifies a user\'s details on the database')
    	.addStringOption(option =>
    		option.setName('name')
    			.setDescription('The name of the event')
    			.setRequired(true))
    	.addStringOption(option =>
    		option.setName('newname')
    			.setDescription('The name of the event')
    			.setRequired(true))
    	.addStringOption(option =>
    		option.setName('newdate')
    			.setDescription('The name of the event')
    			.setRequired(true)),
    new SlashCommandBuilder()
    	.setName('eventdel')
    	.setDescription('Deletes an event from the database')
    	.addStringOption(option =>
    		option.setName('name')
    			.setDescription('The name of the event')
    			.setRequired(true)),
    new SlashCommandBuilder()
    	.setName('poll')
    	.setDescription('Starts a poll for watch party'),
    new SlashCommandBuilder()
    	.setName('getanimeinfo')
    	.setDescription('Gets data about an anime from MyAnimeList')
		.addStringOption(option =>
			option.setName('myanimelistid')
				.setDescription('The ID of the anime on MyAnimeList')
				.setRequired(true)),
];