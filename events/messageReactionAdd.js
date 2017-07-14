const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = async (messageReaction, user) => {
  let message = messageReaction.message;
  let args = message.content.split(' ');
  let messageID = args[0];
  let channel = args[1];

 let validEmojis = ['📌', '📍'];
 let validModEmojis = ['⚠','❌','🚷','⛔', '😄']
 if (validEmojis.includes(messageReaction.emoji.name)) {

   try {
     const embed = new Discord.RichEmbed()
     .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
     .setColor(0x00AE86)
     .setDescription(`${message.content}`)
     .setTimestamp(message.createdAt);

     await user.send(`Here is the message you pinned:\n`, {embed});
   } catch (e) {
     if (e.message === 'Cannot send messages to this user') {
       await message.channel.send(`I cannot send you that message ${user}, as it appears you have **Direct Messages's** disabled.`);
     } else {
       console.log(e);
     }
   }
 } else
 if (validModEmojis.includes(messageReaction.emoji.name)) {
let mention = message.mentions.members.first()
if (messageReaction.emoji.name == '😄') {
client.channels.get(channel).send(":O");
}
 //   try {
 //     const embed = new Discord.RichEmbed()
 //     .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
 //     .setColor(0x00AE86)
 //     .setDescription(`${message.content}`)
 //     .setTimestamp(message.createdAt);
 //
 //     await user.send(`Here is the message you pinned:\n`, {embed});
 //   } catch (e) {
 //     if (e.message === 'Cannot send messages to this user') {
 //       await message.channel.send(`I cannot send you that message ${user}, as it appears you have **Direct Messages's** disabled.`);
 //     } else {
 //       console.log(e);
 //     }
 //   }
 }

  // if(messageReaction.message.channel.id == '324185554897993729') {

// if(user.bot) {
//   console.log("Posted by bot.");
// } else {
//     console.log("Reacted with the exlamation mark emoji.");
//   }
// };


};
