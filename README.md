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
* Pokemon Showdown Web API
* PokeAPI
* Cheerio

## Commands

### ```/replays```

inputs: 
* user (your username)
  
https://github.com/Sajid2001/prof-rowan/assets/60523377/82ac5f78-cfa8-4cf5-aa16-cbf0d17cbc7e


### ```/vs_replays```

inputs:
* userOne (your username)
* userTwo (opponent's username)

https://github.com/Sajid2001/prof-rowan/assets/60523377/62055660-fe17-44f5-80b5-bea70fa76a9f

### ```/info```

inputs: 
* user (your username)

https://github.com/Sajid2001/prof-rowan/assets/60523377/24ba8883-428f-42fe-a732-987ea53bca27

### ```/news```

inputs: (none)

https://github.com/Sajid2001/prof-rowan/assets/60523377/335281da-8928-478c-ada0-71b5b1d65c72

### ```/validate```

inputs:
* format (name of the format you want to validate under - (ex: gen9ou, gen6uu))
* url (url of your pokepaste)

https://github.com/Sajid2001/prof-rowan/assets/60523377/26d28df6-3b74-4f88-b0af-191d571f2f14

### ```/generate```

inputs:
* format (name of the format you want to validate under - (ex: gen9ou, gen6uu))
  * note: custom bans for gen 9 are not supported. So gen9ou as an input will not work, but gen9 will

https://github.com/Sajid2001/prof-rowan/assets/60523377/9d4a2580-203d-4bea-af8d-236b7f6e859b

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

### Why are Gen 9 custom bans not supported for generating a random team?

Unfortunately, that is a problem with the Pokemon showdown API. We may need to wait a while for Gen 9 custom bans to be supported by the API.

### Why can't I see my latest replays?

That is another limitation of the showdown API. Matches may need to be public to be accessed by the showdown API.

