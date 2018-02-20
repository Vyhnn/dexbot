const Discord = require("discord.js");
const oakdexPokedex = require('oakdex-pokedex');

exports.run = (client, message, args) => {

  let poke = "";
  args.forEach(function(arg) {
    poke += arg.charAt(0).toUpperCase() + arg.slice(1) + " ";
  });

  poke = poke.slice(0,-1);
  console.log(poke);

  oakdexPokedex.findPokemon(poke, function(p) {

    console.log(p);
    //get 3 digits dex no.
    let id = p.national_id;
    let id_length = id.toString().length;
    for(i=id_length;i<3;i++){
      id = `0` + id;
    }

    //get description
;
    let entry;
    for(var game in p.pokedex_entries) {
        if(p.pokedex_entries.hasOwnProperty(game)) {
            entry = p.pokedex_entries[game].en;
        }
    }


    //get color
    let color;
    switch(p.types[0]) {
      case "Bug":
        color = "#A8B820";
        break;
      case "Dark":
        color = "#705848";
        break;
      case "Dragon":
        color = "#7038F8";
        break;
      case "Electric":
        color = "#F8D030";
        break;
      case "Fairy":
        color = "#EE99AC";
        break;
      case "Fighting":
        color = "#C03028";
        break;
      case "Fire":
        color = "#F08030";
        break;
      case "Flying":
        color = "#A890F0";
        break;
      case "Ghost":
        color = "#705898";
        break;
      case "Grass":
        color = "#78C850";
        break;
      case "Ground":
        color = "#E0C068";
        break;
      case "Ice":
        color = "#98D8D8";
        break;
      case "Normal":
        color = "#A8A878";
        break;
      case "Poison":
        color = "#A040A0";
        break;
      case "Psychic":
        color = "#F85888";
        break;
      case "Rock":
        color = "#B8A038";
        break;
      case "Steel":
        color = "#B8B8D0";
        break;
      case "Water":
        color = "#6890F0";
        break;
      default:
        color = "#444444";

    }

    //get Typing
    let typings = p.types.join(", ");

    //get abilities
    let abilities = p.abilities.map(function(elem){
      let ability = elem.name;
      if(elem.hidden) {
        ability += "(HA)"
      }
        return ability;
    }).join(", ");

    //get egg Group
    let eggGroups = p.egg_groups.join(", ");

    //get hatching steps
    let hatchSteps = p.hatch_time.join(" - ")

    //get gender Ratio
    let genderRatio = "";
    if(p.gender_ratios===null){
      genderRatio = "Genderless";
    }
    else {
      if(p.gender_ratios.male){
        genderRatio += p.gender_ratios.male +" ♂ "
      }
      if(p.gender_ratios.female){
        genderRatio += p.gender_ratios.female+" ♀ ";
      }
    }

    //get base Stats
    let baseStats = "**HP:** " + p.base_stats.hp + "\n"
                  + "**Attack:** " + p.base_stats.atk + "\n"
                  + "**Defence:** " + p.base_stats.def + "\n"
                  + "**Sp. Attack:** " + p.base_stats.sp_atk + "\n"
                  + "**Sp. Defence:** " + p.base_stats.sp_def + "\n"
                  + "**Speed:** " + p.base_stats.speed + "\n";

    //get setURL
    let url = `https://bulbapedia.bulbagarden.net/wiki/${p.names.en.replace(" ", "_")}_(Pok%C3%A9mon)`

    //build embeded message
    const embed = new Discord.RichEmbed()
      .setTitle(`#${id} ${p.names.en}`)
      .setURL(url)
      .setThumbnail(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`)
      .setDescription(entry)
      .setColor(color)
      .addField("Typing",typings)
      .addField("Ability",abilities)
      .addField("Egg Group",eggGroups)
      .addField("Hatching Step",hatchSteps)
      .addField("Gender Ratio",genderRatio)
      .addField("Base Stats",baseStats)

    message.channel.send({embed});
  });

}
