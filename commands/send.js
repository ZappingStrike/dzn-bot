exports.run = (client, message, args) => {
let userChannel = args[0];
let messageSend = message.content.split(' ').slice(2).join(' ');

if(!messageSend) return message.reply("provide a message please.");
message.guild.channels.get(userChannel).send(`${messageSend}`);
message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['8', '8ball'],
  permLevel: 5
};

exports.help = {
  name: 'send',
  description: 'Sends a message to a channel, by id!',
  usage: 'send [channel id] [message]'
};
