const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { validateTeam } = require('../../functions/teamFunctions')

function createFeedbackEmbed(feedbackData) {
	const embed = new EmbedBuilder()
	   .setTitle(`Feedback`)
       const feedbackList = feedbackData.map((feedback) => {
		return `\u2022 ${feedback}`;
	});

	embed.setDescription(feedbackList.join('\n'));

	return embed;
  }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('validate')
		.setDescription('Validate a team under a specific format')
        .addStringOption(option =>
			option.setName('format')
				.setDescription('The desired format for the team to be validated under')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('url')
				.setDescription('Url to the pokepaste link')
				.setRequired(true)),
	async execute(interaction) {
		const format = interaction.options.getString('format');
        const url = interaction.options.getString('url');
		
		try {
			const feedbackData = await validateTeam(format, url);
			const embed = createFeedbackEmbed(feedbackData);
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.error(error);
			await interaction.reply('Error validating your team');
		}
	},
};