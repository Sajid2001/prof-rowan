const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { getItemData } = require('../../functions/dexFunctions')

//name, flingPower: fling.basePower, desc, imageUrl
function createItemEmbed(itemData) {
    
    const flingPower = itemData.flingPower ? itemData.flingPower : 'None'

	const embed = new EmbedBuilder()
	  .setTitle(`${itemData.name}`)
      .addFields({name:'Description', value:itemData.desc})
      .addFields({name:'Fling Power', value:`${flingPower}`})
      .setThumbnail(itemData.imageUrl)
	return embed;
  }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('item')
		.setDescription('Returns an item and all of its data')
		.addStringOption(option =>
			option.setName('item')
				.setDescription('Item that user searches')
				.setRequired(true)),
	async execute(interaction) {
		const item = interaction.options.getString('item');
		
		try {
			const itemData = await getItemData(item);
			const embed = createItemEmbed(itemData);
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.error(error);
			await interaction.reply('An error occurred while fetching the item data.');
		}
	},
};