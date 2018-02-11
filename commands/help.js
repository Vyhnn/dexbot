const config = require("../config.json");
exports.run = (client, message, args) => {
    message.channel.send(`\`\`\`${config.prefix}poke {dex no.}/{pokemon name} - check the info of that pokemon.\`\`\``).catch(console.error);
}
