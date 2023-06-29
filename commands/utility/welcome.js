const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

//name, flingPower: fling.basePower, desc, imageUrl
function createWelcomeEmbed() {


	const embed = new EmbedBuilder()
	  .setTitle(`Welcome, new Trainer`)
      .setDescription(
		`I am professor Rowan. Nice to meet you!`+
		`\n\n You can ask me anything about Pokemon, items, moves, etc.`+
		` You can also ask me about your Pokemon Showdown replays and elo rankings, as well as validate your teams and generate random ones` +
		`\n\n To check out the full list of commands, check out this link [here](${process.env.GITHUB_REPO_URL})`+
		`\n\nI  hope you have a wonderful Pokemon journey!`

	  )
	return embed;
  }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcome')
		.setDescription('Welcomes the user and guide him or her on how to use the bot'),
	async execute(interaction) {	
        const embed = createWelcomeEmbed();
        await interaction.reply({ embeds: [embed] });

	},
};