# Prof Rowan Discord Bot

## Hello, it is very nice to meet you. Welcome to the world of Pokemon

My name is Rowan. However, everyone just calls me the Pokémon Professor. Before I go any further, is this your first adventure? If you need advice, I'm certainly capable of giving it:

* [Commands](#commands)
   * [Replays](#/replays)
* [Q and A](#q-and-a) 

We humans live alongside Pokémon as friends. At times we play together, and at other times we work together. Some people use their Pokémon to battle and develop closer bonds with them. What do I do? I conduct research so that we may learn more about Pokémon. I am also a discord bot that can provide you with a wide variety of information such as species data, your showdown ELO information, and I can randomly generate a team for just about every format.

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

https://github.com/Sajid2001/prof-rowan/assets/60523377/968856ea-1f96-44eb-bc82-d85df8776594

### ```/move```

inputs:
* move (name of the move you want to look up)

https://github.com/Sajid2001/prof-rowan/assets/60523377/463fe0d1-a0d0-44ca-af1f-ec969a31621f

### ```/ability```

inputs:
* ability (name of the ability you want to look up)

https://github.com/Sajid2001/prof-rowan/assets/60523377/1c0c6d8a-b905-4cc8-b4bd-0868415710d6

### ```/item```

inputs:
* item (name of the item you want to look up)

https://github.com/Sajid2001/prof-rowan/assets/60523377/e3a9506a-aa53-4526-8099-cb178335468e

## Q and A

### Why are Gen 9 custom bans not supported for generating a random team?

Unfortunately, that is a problem with the Pokemon showdown API. We may need to wait a while for Gen 9 custom bans to be supported by the API.

### Why can't I see my latest replays?

That is another limitation of the showdown API. Matches may need to be public to be accessed by the showdown API.

## Technologies Used

* NodeJS / Discord.js
* Pokemon Showdown npm package
* Pokemon Showdown Web API
* PokeAPI
* Cheerio
