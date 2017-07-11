const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor(3447003)
    .setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
    .addField('Member Count', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`, true)
    .addField('Location', message.guild.region, true)
    .addField('Created', message.guild.createdAt.toLocaleString(), true)
    .addField('Roles', message.guild.roles.size, true)
    .addBlankField(true)
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
   message.channel.send(`${message.id} ${message.channel.id}`, {embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e', 'embed'],
  permLevel: 4
};

exports.help = {
  name: 'embed',
  description: 'Testing the looks of the embeds',
  usage: 'embed'
};
