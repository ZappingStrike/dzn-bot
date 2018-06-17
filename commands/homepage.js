exports.run = (client, message, args) => {
    message.author.send("You can find our website here: <http://www.dropzonenation.com/> we have lots of content there, from guides, videos until annuncements for our events! For our current event type `!hivebuster`.").catch(console.error);
    message.react('✅').catch(console.error);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['site', 'page', 'homepage'],
  permLevel: 0,
  dmable: true
};

exports.help = {
  name: 'homepage',
  description: 'More information about our homepage.',
  usage: 'homepage',
  category: 'Help'
};
