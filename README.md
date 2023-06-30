# Prof Rowan Discord Bot

## An all-purpose bot that gives you all the Pokemon information you need. With just a few clicks

The Professor Rowan Discord bot allows you to:
* View your own replays
* View your own ELO information
* Randomly generate teams
* Validate teams
* Look up any Pokemon, move, ability, and item

## Technologies Used

* Discord.js
* NodeJS
* Pokemon Showdown npm package
* PokeAPI
* Cheerio

## Commands

### ```/replays```

inputs: 
* user (your username)
  
### ```/vs_replays```

inputs:
* userOne (your username)
* userTwo (opponent's username)
  
### ```/info```

inputs: 
* user (your username)
  
### ```/news```

inputs: (none)

### ```/validate```

inputs:
* format (name of the format you want to validate under - (ex: gen9ou, gen6uu))
* url (url of your pokepaste)
  
### ```/generate```

inputs:
* format (name of the format you want to validate under - (ex: gen9ou, gen6uu))
  * note: custom bans for gen 9 are not supported. So gen9ou as an input will not work, but gen9 will
    
### ```/species```

inputs: 
* species (name of the species you want to look up)
  
### ```/move```

inputs:
* move (name of the move you want to look up)

### ```/ability```

inputs:
* ability (name of the ability you want to look up)

### ```/item```

inputs:
* item (name of the item you want to look up)

## Q and A

### Why are gen 9 custom bans not supported for generating a random team?

Unfortunately, that is a problem with the pokemon showdown api. We may need to wait a while for gen 9 custom bans to be supported by the api.

### Why can't I see my latest replays?

That is another limitation with the showdown api. Matches may need to be public to be accessed by the api.
