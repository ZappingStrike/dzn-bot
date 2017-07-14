exports.run = (client, message, args) => {
    message.author.send("We are the first ever Community in Dropzone. We have our own Discord server, in which you are in and we host events, write logs, live stream and more! Find out more about us here: <http://www.dropzonenation.com/about>").catch(console.error);
    message.react('✅').catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['a', 'about'],
  permLevel: 5,
  dmable: true
};

exports.help = {
  name: 'about',
  description: 'More information about us.',
  usage: 'about'
};
