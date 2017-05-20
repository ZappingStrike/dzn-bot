exports.run = (client, message, args) => {
  if(message.author.id !== "192256925025566721") return;
  if(!args || args.size < 1) return message.channel.reply(`Must provide a command name to reload.`);
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`my overlord, your request to reload the command **${args[0]}** has been successfully accomplished.`);
};
