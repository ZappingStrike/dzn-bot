const Discord = require("discord.js");
const config = require('../config.json');

module.exports = async message => {
// let testNumber = 1;
// testNumber++
// console.log(testNumber +". Message");
let client = message.client;

  const badWords = ["shit", "fuck", "damn", "bitch", "crap", "piss", "dick", "darn", "cock", "pussy", "asshole", "fag", "bastard", "slut", "douche"];
  if (badWords.some(word => message.content.includes(word)) ) {
    let badWordsChannel = message.guild.channels.get('324185554897993729');
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Bad Word sent\n**Target:** <@${message.author.id}>\n**Moderator:** ${message.client.tag}`);
    badWordsChannel.send({embed}).catch(console.error)
    .then(msg => {
  msg.react('⚠');
  msg.react('❌');
  msg.react('🚷');
  msg.react('⛔');
});
} else

  // if(message.content.includes("discord.gg/" || "discordapp.com/invite/")) {
  //   if (message.content.includes("https://discord.gg/ezacvzR")) return;
  //   if (message.content.includes("https://discord.gg/5zrGMY9")) return;
  //   var discordInvites = client.channels.get('312918635536711680');
  //   let msg = message.delete().then(msg => discordInvites.send(`**${message.author.tag}** (${message.author.id}): \n*${message.content}*`)).then(msg => {
  //     msg.react('⚠');
  //     msg.react('❌');
  //     msg.react('🚷');
  //     msg.react('⛔');
  //   });
  // } else
// //   if (message.channel.type !== 'text' && !message.content.startsWith(config.prefix + "DZN") && !message.content.startsWith(config.prefix + "contact")) {
// //     message.reply("All commands are disabled in direct messages, except `!DZN` to contact us directly.").catch(console.log);
// //     var chat = client.channels.get('309731091520946177');
// //     return chat.sendMessage(`**${message.author.username}**#${message.author.discriminator}(${message.author.id}): \n*${message.content}*`);
// //   };
//
//
if (message.author.bot) return;
if (!message.content.startsWith(config.prefix) && !message.isMentioned(client.user)) return;
let command = message.content.split(' ')[0].slice(config.prefix.length).toLowerCase();

if (message.channel.type !== 'text') {
  let params = message.content.split(' ').slice(1);
  // let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (cmd.conf.dmable == false) return message.reply('You can\'t use this command in DMs');
    // if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params);
  } return;
};

let params = message.content.split(' ').slice(1);
let perms = client.elevation(message);
let cmd;
if (client.commands.has(command)) {
  cmd = client.commands.get(command);
} else if (client.aliases.has(command)) {
  cmd = client.commands.get(client.aliases.get(command));
}
if (cmd) {
  if (perms < cmd.conf.permLevel) return;
  cmd.run(client, message, params, perms);
}
};
