const {Dex} = require('pokemon-showdown');
const {getPokemonImage, getItemImage} = require('./imageFunctions')



const getSpeciesData = async(search) =>{
    const result = Dex.species.get(search)
    const imageUrl = await getPokemonImage(search);
    const {exists, name, types, baseStats, abilities, heightm, weightkg, prevo, evoType, evos, eggGroups, tier, genderRatio} = result
    if (exists){
        return {name, types, baseStats, abilities, heightm, weightkg, prevo, evoType, evos, eggGroups, tier, genderRatio, imageUrl}
    } else {
        throw new Error('Species does not exist')
    }
}

const getMoveData = async(search) => {
    const result = Dex.moves.get(search)
    const {exists, name, accuracy, category,status, pp, desc, basePower, type} = result
    if(exists){
        return {name, accuracy, category,status, pp, desc, basePower, type}
    }
    else{
        throw new Error('Move does not exist')
    }
}

const getAbilityData = async(search) => {
    const result = Dex.abilities.get(search)
    const {exists, name, rating, desc} = result
    if(exists){
        return {name, rating, desc}
    }
    else{
        throw new Error('Ability does not exist')
    }
}

const getItemData = async(search) => {
    const result = Dex.items.get(search)
    const imageUrl = await getItemImage(search);
    const {exists, name, fling, desc} = result
    if(exists){
        if(fling){
            return {name, flingPower: fling.basePower, desc, imageUrl}
        }
        else{
            return {name, desc, imageUrl}
        }
    }
    else{
        throw new Error('Item does not exist')
    }
}

module.exports = { getSpeciesData, getMoveData, getAbilityData, getItemData }