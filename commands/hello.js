const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.channel.send("Hello there! Enjoy your time in our Discord server, and if you need any help, type `!help`!").catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hi', 'hello'],
  permLevel: 0,
  dmable: true
};

exports.help = {
  name: 'hello',
  description: 'Displays hello',
  usage: 'help'
};
