exports.run = (client, message, args) => {
    message.author.send("PARADELTON MAKE ME A TEXT PLS").catch(console.error);
    message.react('✅').catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cup', 'hivebuster'],
  permLevel: 0
};

exports.help = {
  name: 'hivebuster',
  description: 'More information about our HiveBuster tournament.',
  usage: 'hivebuster'
};
