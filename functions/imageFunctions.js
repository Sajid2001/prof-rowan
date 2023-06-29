const axios = require('axios');

const getPokemonImage = async(species) => {
    try {
      const response = await axios.get(`${process.env.POKEAPI_BASE_URL}/pokemon/${species.toLowerCase()}`);
      const pokemonData = response.data;
      const imageUrl = pokemonData.sprites.front_default;
      return imageUrl;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch the Pokémon image.');
    }
  }

  const getItemImage = async (item) => {
    try {
      const formattedItem = item.replace(/\s+/g, '-');;
      const response = await axios.get(`${process.env.POKEAPI_BASE_URL}/item/${formattedItem}`);
      const itemData = response.data;
      const imageUrl = itemData.sprites.default;
      return imageUrl;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch the item image.');
    }
  };

  module.exports = { getPokemonImage, getItemImage }