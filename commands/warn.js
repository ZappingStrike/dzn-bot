// exports.run = (client, message, args) => {
//   var chat = client.channels.get('309779264574849025');
//   const args = message.content.split(" ").slice(1);
//   let warnMessage = args.slice(0).join(" ")
//   chat.send(`${message.author.username}: \n${warnMessage}`);
//     message.react('✅');
// };

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['w', 'warn'],
  permLevel: 4,
  dmable: false
};

exports.help = {
  name: 'warn',
  description: 'Warns the user.',
  usage: 'warn [mention] [reason]',
  category: 'Moderation'
};
