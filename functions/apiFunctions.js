const axios = require('axios');
const dotenv = require('dotenv')
dotenv.config();

const getReplaysByUser = async (user) => {
    const response = await axios.get(`${process.env.POKEMON_SHOWDOWN_REPLAY_URL}/search.json?user=${user}`);
    const results = response.data;
    if (results && results.length > 0) {
      const battles = results.map((result) => {
        const { p1,p2,id } = result;
        const url = `${process.env.POKEMON_SHOWDOWN_REPLAY_URL}/${id}`
        return { p1, p2, url };
      });
      const recentBattles = battles.slice(0, 8);

    return recentBattles;
    } else {
      throw new Error('No results found for the given search term');
    }
};

const getReplaysByMultipleUsers = async (userOne,userTwo) => {
  const responseUrl = `${process.env.POKEMON_SHOWDOWN_REPLAY_URL}/search.json?user=${userOne}&user2=${userTwo}`
    const response = await axios.get(responseUrl);
    const results = response.data;
    if (results && results.length > 0) {
      const battles = results.map((result) => {
        const { p1,p2,id } = result;
        const url = `${process.env.POKEMON_SHOWDOWN_REPLAY_URL}/${id}`
        return { p1, p2, url };
      });
      return battles;
    } else {
      throw new Error('No results found for the given search term');
    }
};

const getUserInfo = async(user) => {
    user = user.replace(/ /g, '');
    const response = await axios.get(`${process.env.POKEMON_SHOWDOWN_BASE_URL}/users/${user}.json`);
    const result = response.data;
    if (result){
        const{username, ratings} = result;
        const ratingsArray = Object.entries(ratings).map(([name, data]) => ({ name: name, ...data }));
        const relevantRatingsArray = ratingsArray.slice(ratingsArray.length - 6, ratingsArray.length-1);
        return {username, relevantRatingsArray}
    } else {
        throw new Error('No results found for this specific user');
      }
}

const getNews = async() => {
    const response = await axios.get(`${process.env.POKEMON_SHOWDOWN_BASE_URL}/news.json`);
    const results = response.data;
    if(results && results.length > 0){
      const relevantNews = results.slice(0,3);
        return relevantNews;
    }
    else {
        throw new Error('No results found');
    }
}

module.exports = {
    getReplaysByUser,
    getReplaysByMultipleUsers,
    getUserInfo,
    getNews,
}