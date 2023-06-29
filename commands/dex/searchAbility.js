const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { getAbilityData } = require('../../functions/dexFunctions')

// name, rating, desc
function createAbilityEmbed(abilityData) {

	const embed = new EmbedBuilder()
	  .setTitle(`${abilityData.name}`)
	   .addFields(
            { name: `Rating`, value:`${abilityData.rating}`},
			{ name: `Description `, value: `${abilityData.desc}`},
        )

	return embed;
  }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ability')
		.setDescription('Returns the ability data')
		.addStringOption(option =>
			option.setName('ability')
				.setDescription('Ability that the user wants to look up')
				.setRequired(true)),
	async execute(interaction) {
		const ability = interaction.options.getString('ability');
		
		try {
			const abilityData = await getAbilityData(ability);
			const embed = createAbilityEmbed(abilityData);
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.error(error);
			await interaction.reply('Could not find the move you were looking for');
		}
	},
};