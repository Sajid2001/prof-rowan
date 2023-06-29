const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const {getUserInfo} = require('../../functions/apiFunctions')


function createInfoEmbed(userData) {
    const ratingsArray = userData.relevantRatingsArray;
	const embed = new EmbedBuilder()
	  .setTitle(`${userData.username}, here is your data`)

	for (const rating of ratingsArray) {
		embed.addFields(
            { name: '\u200B', value: '\u200B', inline: false },
			{ name: `Format: `, value:rating.name},
            { name: 'GXE', value:`${rating.gxe}`},
            { name: 'Elo', value:`${rating.elo}` },
            { name: 'Peak', value:`${rating.rpr}`},
		)
	}
	return embed;
  }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Returns showdown user info')
		.addStringOption(option =>
			option.setName('user')
				.setDescription('The input to echo back')
				.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getString('user');
		
		try {
			const userData = await getUserInfo(user);
			const embed = createInfoEmbed(userData);
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.error(error);
			await interaction.reply('An error occurred while fetching the user data.');
		}
	},
};