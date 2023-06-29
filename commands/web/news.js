const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const {getNews} = require('../../functions/apiFunctions')

function htmlParse(htmlText){
    return htmlText.replace(/<[^>]+>/g, '');
}


function createNewsEmbed(newsData) {
	const embed = new EmbedBuilder()
	  .setTitle(`Here is what's going on in Showdown right now`)

	for (const news of newsData) {
        const datePublished = new Date(news.date * 1000).toDateString();
        const summary = htmlParse(news.summaryHTML)

		embed.addFields(
            { name: '\u200B', value: '\u200B', inline: false },
            { name: 'Article', value:news.title},
            { name: 'Author', value:news.author, inline:true },
            { name: 'Date', value:`${datePublished}`, inline:true },
            { name: 'Summary', value:summary}
           
		)
	}
	return embed;
  }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('news')
		.setDescription('Returns showdown news info'),
	async execute(interaction) {	
		try {
			const newsData = await getNews();
			const embed = createNewsEmbed(newsData);
			await interaction.reply({ embeds: [embed] });
		} catch (error) {
			console.error(error);
			await interaction.reply('An error occurred while fetching the news data.');
		}
	},
};