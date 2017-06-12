const config = require('../config.json');

module.exports = async message => {
//   let client = message.client;
// //   if (message.author.bot) return;
// //   let badWords = [
// //     "shit", "fuck", "damn", "bitch", "crap", "piss", "dick", "darn", "cock", "pussy", "asshole", "fag", "bastard", "slut", "douche"
// //   ];
// //   if(message.content.includes("https://discord.gg/")) {
// //     if (message.content.includes("https://discord.gg/ezacvzR")) return;
// //     if (message.content.includes("https://discord.gg/5zrGMY9")) return;
// //     var discordInvites = client.channels.get('312918635536711680');
// //     let msg = message.delete().then(msg => discordInvites.send(`**${message.author.tag}** (${message.author.id}): \n*${message.content}*`)).then(msg => {
// //       msg.react('⚠');
// //       msg.react('❌');
// //       msg.react('🚷');
// //       msg.react('⛔');
// //     });
// //   } else
// // //badWords.push["Adds to the array."]
// // //not working as intended
// //   if (badWords.includes(message.content)) {
// //     let deletedContent = client.channels.get('312894658718203904')
// //     deletedContent.send({embed: {
// //       color: 3447003,
// //    description: 'Test'}}).then(msg => {
// //       msg.react('⚠');
// //       msg.react('❌');
// //       msg.react('🚷');
// //       msg.react('⛔');
// //     });
// //   };
// //   if (message.channel.type !== 'text' && !message.content.startsWith(config.prefix + "DZN") && !message.content.startsWith(config.prefix + "contact")) {
// //     message.reply("All commands are disabled in direct messages, except `!DZN` to contact us directly.").catch(console.log);
// //     var chat = client.channels.get('309731091520946177');
// //     return chat.sendMessage(`**${message.author.username}**#${message.author.discriminator}(${message.author.id}): \n*${message.content}*`);
// //   };
//
//
//   if (!message.content.startsWith(config.prefix)) return;
//   let command = message.content.split(' ')[0].slice(config.prefix.length);
//   command = command.slice(config.prefix.length);
//   let args = message.content.split(' ').slice(1);
//   let perms = client.elevation(message);
//   let cmd;
//  if (client.commands.has(command)) {
//    cmd = client.commands.get(command);
//  } else if (client.aliases.has(command)) {
//    cmd = client.commands.get(client.aliases.get(command)).catch(console.error);;
//  }
//  if (cmd) {
//    if (perms < cmd.conf.permLevel) return;
//    cmd.run(client, message, args, perms);
//  }
//
// };
// function clean(text) {
//   if (typeof(text) === "string")
//     return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));

let client = message.client;
if (message.author.bot) return;
if (!message.content.startsWith(config.prefix)) return;
let command = message.content.split(' ')[0].slice(config.prefix.length);
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
