// const Discord = require('discord.js');
//
// exports.run = (client, message, args) => {
// let bannedDude = message.mentions.members.first();
// let reason = message.content.split(' ').slice(2).join(' ');
// let ununBanChannel = client.channels.get('325221356859949056');
//
// if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
//    return message.reply("I don't have the power to ban here.");
//  };
//
// if(!bannedDude) {
//    return message.reply("You must mention a user to unban.");
//  };
//
// if(message.isMentioned(client.user)) {
//   return message.reply("I was never banned, and never will be!");
// };
//
// if(!message.guild.member(bannedDude).bannable) {
//  return message.reply("Cannot ban that member, because he has more permissions than me.");
// };
//
// if(!reason) {
//   return message.reply("Please provide a reason, after the mention.");
// };
//
//
// //bannedDude.tag = undefined
//
// const embed = new Discord.RichEmbed()
// .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
// .setColor(0x00AE86)
// .setTimestamp()
// .setDescription(`**Action:** Kick\n**Target:** <@${bannedDude.id}>\n**Reason:** \`\`${reason}\`\``);
//  unBanChannel.send({embed})
//
//  bannedDude.ban(reason)
//  .then(message.reply(":ok_hand:"));
// };
//
// exports.conf = {
//   enabled: false,
//   guildOnly: false,
//   aliases: ['b', 'ban'],
//   permLevel: 4
// };
//
// exports.help = {
//   name: 'ban',
//   description: 'Bans the mentioned user',
//   usage: 'ban [mention] [reason]'
// };
