exports.run = (client, message) => {

  //pokecord listener

  if(message.author.id === "175984908802457600") {
    if(message.embeds.title.indexOf("A wild pokémon has appeared")) {
      console.log("A wild pokemon appeared");
    }
  }
}
