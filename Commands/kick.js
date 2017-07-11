const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args) => {
let kickedDude = message.mentions.members.first();
let reason = message.content.split(' ').slice(2).join(' ');
let kickChannel = client.channels.get('323912843546198024');
let guild = message.guild;

if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
   return message.reply("I don't have the power to kick here.");
 };

if(!kickedDude) {
   return message.reply("You must mention a user to kick.");
 };

if(message.isMentioned(client.user)) {
  return message.reply("You cannot ever kick me! Why would you like to do that? I'm the best bot in the universe.");
};

if(message.isMentioned(config.ownerid)) {
  return message.reply(`You want to kick <@${config.ownerid}>?! I would not try to do that, or you might be in trouble...`);
};

if(kickedDude.hasPermission('VIEW_AUDIT_LOG')) {
  return message.reply(`The Dropzone Nation staff is awesome, you can't possibly kick a staff member, c'mon :D`);
}

if(!message.guild.member(kickedDude).kickable) {
 return message.reply("Cannot kick that member, because he has more permissions than me.");
};

if(!reason) {
  return message.reply("Please provide a reason, after the mention.");
};

const embed = new Discord.RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setColor(0x00AE86)
.setTimestamp()
.setDescription(`**Action:** Kick\n**Target:** <@${kickedDude.id}>\n**Reason:** \`\`${reason}\`\``)
 kickChannel.send({embed})

 kickedDude.kick(reason)
 .then(message.reply(":ok_hand:"));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k', 'kick'],
  permLevel: 3
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user',
  usage: 'kick [mention] [reason]'
};
