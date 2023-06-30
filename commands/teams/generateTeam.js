const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { generateTeam } = require('../../functions/teamFunctions')

function createTeamEmbed(format, pokepaste) {
	const bulletpoint = '\u200B-'; 

    const formattedPokepaste = pokepaste.replace(/-/g, bulletpoint);
	const embed = new EmbedBuilder()
	   .setTitle(`Generated Team: ${format}`)
       .setDescription(formattedPokepaste)

	return embed;
  }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('generate')
		.setDescription('Randomly generated a team based on format(ex: gen5uu, gen3pu, etc)')
		.addStringOption(option =>
			option.setName('format')
				.setDescription('The format of the generated team')
				.setRequired(true)),
	async execute(interaction) {
		const format = interaction.options.getString('format');
		
		try {
			const pokepaste = await generateTeam(format);
			const embed = createTeamEmbed(format, pokepaste);
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.error(error);
			await interaction.reply('Error generating your team');
		}
	},
};