exports.run = (client, message) => {

  //pokecord listener

  if(message.author.id === "365975655608745985") {
    if(message.embeds !== 'undefined' && message.embeds.length > 0) {
      if(message.embeds[0].title.indexOf("A wild pokémon has appeared")) {

        let pokecordRole = "<@&417180976708452352>";
        message.channel.send(pokecordRole);

      }
    }



  }
}
