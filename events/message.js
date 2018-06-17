const Discord = require("discord.js");
const config = require('../config.json');
const fs = require('fs');

    // Import the Moderation file
    const rawModFile = fs.readFileSync('moderation.json');
    
        // Convert to Javascript Object
        const modFile = JSON.parse(rawModFile);

module.exports = async message => {
let client = message.client;
let command = message.content.split(' ')[0].slice(config.prefix.length).toLowerCase();
message.embeds.forEach((embed) => {
// console.log(embed);
// console.log(embed.author.name);
});

const badWords = ["shit", "fuck", "damn", "bitch", "crap", "piss", "dick", "darn", "cock", "pussy", "asshole", "fag", "bastard", "slut", "douche", "anal", "anus", "ballsack", "blowjob", "blow", "job", "boner", "clitoris", "cock", "cunt", "dick", "dildo", "dyke", "fag", "jizz", "labia", "muff", "nigger", "nigga", "penis", "piss", "pussy", "scrotum", "sex", "slut", "smegma", "spunk", "twat", "vagina", "wank", "whore"];
  if (badWords.some(word => message.content.toLowerCase().includes(word)) ) {

    // // Import the Moderation file
    // const rawModFile = fs.readFileSync('moderation.json');

    // // Convert to Javascript Object
    // const modFile = JSON.parse(rawModFile);
    modFile['modCase'] = modFile.modCase +1;
    console.log(modFile['modCase']);

    let badWordsChannel = message.guild.channels.get('324185554897993729');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Wording issues\n**Message:**\n${message.content}`)
    .addField('Case', 'WIP', true)
    .addField('Message ID', message.id, true)
    .setFooter();
    badWordsChannel.send({embed})
    // badWordsChannel.send(`Message ID: ${message.id}\nChannel ID: ${message.channel.id}\nMessage Author ID: ${message.author.id}`, {embed}).catch(console.error)
    .then(msg => {
  msg.react('⚠');
  msg.react('❌');
  msg.react('🚷');
  msg.react('⛔');
  // console.log(embed.fields[0].value)
});
modFile[modFile.modCase] = {
  "messageID": message.id,
  "channelID": message.channel.id,
  "authourTag": message.author.tag,
  "authorID": message.author.id,
  "guild": message.guild.name,
  "guildID": message.guild.id,
  "punishment": "",
  "reasons": ['swearing'],
  "mods": [],
  "messages": [message.content]
};
let data = JSON.stringify(modFile, null, 2);
fs.writeFileSync('moderation.json', data, () => {
  console.log('done');
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

if (message.author.bot && message.author.id !== client.user.id) return;
  if (message.author.id === client.user.id && command !== "kick" && command !== "send") return;

if (message.channel.type !== 'text' && !message.content.startsWith(config.prefix)) {
  message.channel.send('Hello there!\nIf you need support, use `!support`\nFor a list of all available commands usable by you, use `!help`. Otherwise, please enjoy your time in the Dropzone Nation Discord server!');
  return;
};

if (!message.content.startsWith(config.prefix) && !message.isMentioned(client.user)) return;

if (message.channel.type !== 'text') {
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (cmd.conf.dmable == false) return message.reply('You can\'t use this command in DMs.');
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
