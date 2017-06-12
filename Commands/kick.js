const Discord = require('discord.js');

exports.run = (client, message, args) => {
let kickedDude = message.mentions.members.first();
let reason = message.content.split(' ').slice(2).join(' ');
let mention = message.content.split(' ').slice(1);
let kickChannel = client.channels.get('323912843546198024');

if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
   return message.reply("I don't have the power to kick here.");
 };

if(!kickedDude) return message.reply("You must mention a user to kick.");

// if(kickedDude == message.client) return message.reply("You cannot ever kick me! Why would you like to do that? I'm the best bot in the unvirse.");

if(!message.guild.member(kickedDude).kickable) {
 return message.reply("Cannot kick that member, because he has more permissions than me.")
};

if(!reason) return message.reply("Please provide a reason after the mention.");
 kickedDude.kick(reason)

 .then(message.reply(":ok_hand:"));

const embed = new Discord.RichEmbed()
.setColor(0x00AE86)
.setTimestamp()
.setDescription(`**Action:** Kick\n**Target:** ${kickedDude.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** \`\`${reason}\`\``);
 kickChannel.send({embed})
};

//kickedDude.tag results as undefined.

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k', 'kick'],
  permLevel: 4
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user',
  usage: 'kick [mention] [reason]'
};
