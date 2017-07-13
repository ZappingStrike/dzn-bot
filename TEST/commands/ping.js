exports.run = (client, message, args) => {
  message.reply(`My ping is: :alarm_clock: **${client.ping.toFixed(2)} ms** :alarm_clock:`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'ping'],
  permLevel: 2
};

exports.help = {
  name: 'ping',
  description: 'Checks the bot\'s ping.',
  usage: 'ping'
};
