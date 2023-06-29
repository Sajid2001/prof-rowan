const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { getReplaysByMultipleUsers } = require('../../functions/apiFunctions')

function createVSReplaysEmbed(userOne, userTwo, replaysData) {
	const embed = new EmbedBuilder()
	  .setTitle(`${userOne} vs ${userTwo}`)

	for (const data of replaysData) {
		embed.addFields(
			{ name: `${userOne} vs ${userTwo}: `, value: data.url},
		)
	}
	return embed;
  }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vs_replays')
		.setDescription('Returns showdown replays for every match between two users')
		.addStringOption(option =>
			option.setName('user_one')
				.setDescription('User One')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('user_two')
				.setDescription('User Two')
				.setRequired(true)),
	async execute(interaction) {
		const userOne = interaction.options.getString('user_one');
		const userTwo = interaction.options.getString('user_two');
		
		try {
			const replaysData = await getReplaysByMultipleUsers(userOne, userTwo);
			const embed = createVSReplaysEmbed(userOne, userTwo, replaysData);
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.error(error);
			await interaction.reply('An error occurred while fetching the replay data.');
		}
	},
};