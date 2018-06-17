const fs = require('fs');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let caseNumber = args[1];
    // Import the Moderation file
    const rawModFile = fs.readFileSync('moderation.json');
    // Convert to Javascript Object
    const modFile = JSON.parse(rawModFile);

    const embed = new Discord.RichEmbed()
    .addField(modFile[caseNumber].authorID);

    message.channel.send(embed);
  };
  
  exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['info', 'c'],
    permLevel: 3,
    dmable: false
  };
  
  exports.help = {
    name: 'case',
    description: 'Get all information regarding a moderation case',
    usage: 'case [number]',
    category: 'Moderation'
  };