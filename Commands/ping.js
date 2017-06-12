// exports.run = (client, message, args) => {
//     // message.channel.send("pong!").catch(console.error);
//     message.reply("Pinging....").then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - <Message>.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`) );
// };
// //var names = ['Hochberg', 'Hönigswald', 'Holzman'];

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
