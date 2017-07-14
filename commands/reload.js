exports.run = (client, message, args) => {
  if(!args || args.size < 1) return message.channel.reply(`Must provide a command name to reload.`);
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`my overlord, your request to reload the command **${args[0]}** has been successfully accomplished.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rl', 'reload'],
  permLevel: 4,
  dmable: true
};

exports.help = {
  name: 'reload',
  description: 'Reloads a command.',
  usage: 'reload [command]'
};
