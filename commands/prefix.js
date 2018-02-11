const config = require("../config.json");
const fs = require("fs");

exports.run = (client, message, args) => {
  if(message.author.id===config.owner){
    if(args.length === 1) {
      let newPrefix = args[0];

      config.prefix = newPrefix;

      fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);

      message.channel.send("Prefix has successfully changed to "+config.prefix);

    }
    else {
        message.channel.send("invalid input");
    }
  }


}
