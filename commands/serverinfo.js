const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  const embed = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.setColor(3447003)
.setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
.addField('Members', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bot)`, true)
.addField('Location', message.guild.region, true)
.addField('Created', message.guild.createdAt.toLocaleString(), true)
.addField('Roles', message.guild.roles.size, true)
.addBlankField(true)
.setTimestamp()
.setFooter(client.user.username, client.user.avatarURL);

if(message.guild.afkChannelID !== null) {
  embed.addField('AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
  .addField('AFK Channel', `${client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID})`, true);
}

try {
  await message.channel.send({embed});
} catch (e) {
  console.log(e);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info', 'serverinformation'],
  permLevel: 4,
  dmable: false
};

exports.help = {
  name: 'serverinfo',
  description: 'Some server information',
  usage: 'serverinfo'
};
