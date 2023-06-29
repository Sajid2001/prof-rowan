const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { getMoveData } = require('../../functions/dexFunctions')

// category
function createMoveEmbed(moveData) {

    const status = moveData.status ? moveData.status : 'None'
    const additionalEffect = (moveData.desc === 'No additional effect.') ? 'None' : moveData.desc

	const embed = new EmbedBuilder()
	  .setTitle(`${moveData.name}`)
	   .addFields(
			{ name: `Accuracy  `, value: `${moveData.accuracy}`, inline:true},
            { name: `PP `, value: `${moveData.pp}`, inline:true},
            { name: `Base Power`, value:`${moveData.basePower}`, inline:false},
			{ name: `Type`, value:moveData.type, inline:true},
            { name: `Category`, value:moveData.category, inline:true},
            { name: `Status`, value: status, inline:true},
            { name: `Additional Effects`, value:additionalEffect},
        )
        .setThumbnail('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-normal.png')

	return embed;
  }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('move')
		.setDescription('Returns the move data')
		.addStringOption(option =>
			option.setName('move')
				.setDescription('Move that the user wants to look up')
				.setRequired(true)),
	async execute(interaction) {
		const move = interaction.options.getString('move');
		
		try {
			const moveData = await getMoveData(move);
			const embed = createMoveEmbed(moveData);
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.error(error);
			await interaction.reply('Could not find the move you were looking for');
		}
	},
};