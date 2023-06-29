const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { getReplaysByUser } = require('../../functions/apiFunctions')

function createReplaysEmbed(user, replaysData) {
	const embed = new EmbedBuilder()
	  .setTitle(`${user}, here are your eight most recent matches`)

	for (const data of replaysData) {
		embed.addFields(
			{ name: `${data.p1} vs ${data.p2}: `, value: data.url},
		)
	}
	return embed;
  }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('replays')
		.setDescription('Returns showdown replay urls for a single user')
		.addStringOption(option =>
			option.setName('user')
				.setDescription('The input to echo back')
				.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getString('user');
		
		try {
			const replaysData = await getReplaysByUser(user);
			const embed = createReplaysEmbed(user, replaysData);
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.error(error);
			await interaction.reply('Could not find the replays you were looking for');
		}
	},
};