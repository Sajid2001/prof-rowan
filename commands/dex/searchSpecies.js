const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { getSpeciesData } = require('../../functions/dexFunctions')

function formatBaseStats(baseStats) {
    let statString = '';
    for (const statName in baseStats) {
      const statValue = baseStats[statName];
      statString += `${statName.toUpperCase()} - ${statValue}\n`;
    }
    return statString.trim();
  }
  

// genderRatio 
function createSpeciesEmbed(speciesData) {
    const formattedTypes = speciesData.types.length > 1 ? speciesData.types.join(' / ') : speciesData.types[0];
    const formattedStats = formatBaseStats(speciesData.baseStats);
    const formattedEvos = speciesData.evos.length > 0 ? speciesData.evos.join(', ') : 'None';
    const formattedPrevo = speciesData.prevo ? speciesData.prevo : 'None'
    const formattedEggGroups = speciesData.eggGroups ? speciesData.eggGroups.join(', ') : 'None'

    const abilities = Object.values(speciesData.abilities).filter((ability) => ability !== '');
    const formattedAbilities = abilities.join(', ')

    const maleRatio = speciesData.genderRatio.M;
    const femaleRatio = speciesData.genderRatio.F;

    const embed = new EmbedBuilder()
        .setTitle(`${speciesData.name}`)
        .setDescription(
            `**Tier**: \n${speciesData.tier}\n\n` +
            `**Types**: \n${formattedTypes}\n\n` +
            `**Abilities**: \n${formattedAbilities}\n\n` +
            `**Gender Ratio**: \nMale: ${maleRatio} / Female: ${femaleRatio}\n\n` +
            `**Base Stats**: \n${formattedStats}\n\n` +
            `**Height (m) / Weight (kg)**: \n${speciesData.heightm} / ${speciesData.weightkg}\n\n` +
            `**Prev. Evolutions**: \n${formattedPrevo}\n\n` +
            `**Evolutions**: \n${formattedEvos}\n\n` +
            `**Egg Groups**: \n${formattedEggGroups}` 
        )
        .setThumbnail(speciesData.imageUrl);

    return embed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('species')
		.setDescription('Returns species that user searches')
		.addStringOption(option =>
			option.setName('species')
				.setDescription('Enter a species you want to look up')
				.setRequired(true)),
	async execute(interaction) {
		const species = interaction.options.getString('species');
		
		try {
			const speciesData = await getSpeciesData(species);
			const embed = createSpeciesEmbed(speciesData);
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.error(error);
			await interaction.reply('An error occurred while fetching the Pokemon data.');
		}
	},
};