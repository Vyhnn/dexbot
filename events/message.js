exports.run = (client, message) => {

  //pokecord listener

  if(message.author.id === "365975655608745985") {
    if(message.embeds.title.indexOf("A wild pokémon has appeared")) {
      console.log("A wild pokemon appeared");
    }
  }
}
