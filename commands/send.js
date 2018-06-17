exports.run = (client, message, args) => {
let userChannel = args[0];
let messageSend = message.content.split(' ').slice(2).join(' ');

if(!messageSend) return message.reply("provide a message please.");
client.users.get(userChannel).send(`${messageSend}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'send'],
  permLevel: 5,
  dmable: true
};

exports.help = {
  name: 'send',
  description: 'Sends a message to a channel, by id!',
  usage: 'send [channel id] [message]',
  category: 'Moderation'
};
