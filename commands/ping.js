exports.run = (client, message, args) => {
  message.channel.send(`My ping is: :alarm_clock: **${client.ping.toFixed(2)} ms** :alarm_clock:`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'ping'],
  permLevel: 2,
  dmable: true
};

exports.help = {
  name: 'ping',
  description: 'Checks the bot\'s ping.',
  usage: 'ping',
  category: 'System'
};
