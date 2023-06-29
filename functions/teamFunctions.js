const {Teams, TeamValidator} = require('pokemon-showdown');
const axios = require('axios');
const cheerio = require('cheerio');

const generateTeam = async (format) => {
    try {
      const generatedTeam = Teams.generate(format);
      formattedTeam = Teams.export(generatedTeam)
      return formattedTeam;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const validateTeam = async (format, url) => {
    let fullPaste = '';
  
    try {
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);
  
      $('article').each((index, element) => {
        const text = $(element).text();
        fullPaste += text.trim() + '\n\n';
      });
  
      const validator = new TeamValidator(format);
      const output = validator.validateTeam(Teams.import(fullPaste));
      return output;
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = {generateTeam, validateTeam}
