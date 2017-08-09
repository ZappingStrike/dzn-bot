const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = async (messageReaction, user) => {
  let message = messageReaction.message;
  let channel = message.channel;
// Pin message feature
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

//Swearing Moderation
if (channel.id == '324185554897993729') {
  let validModjis = ['⚠', '❌', '🚷', '⛔'];

  if (!validModjis.includes(messageReaction.emoji.name)) return;
  if (user.id == '304613358014038017') return;
  let args = message.content.split('-')
  let badguyID = args[0];

  if (messageReaction.emoji.name == '⚠') {
    message.channel.send('Warning a user is done through private messages. Do you want to use the default warning text, or customize it? \n:regional_indicator_f: for customizing the reason \n:regional_indicator_t: for sending the user a total customized text (not using the template)\n:white_check_mark: for using the default template.\n Please react to this message with your choice!')
    .then(msg => {
    msg.react('✅');
    msg.react('🇫');
    msg.react('🇹');
  });
    await message.react;
  if (messageReaction.emoji.name == '✅') return;
  };
  if (messageReaction.emoji.name == '❌') message.unpin();
  if (messageReaction.emoji.name == '🚷') {
    message.channel.send(`!kick <@${badguyID}> swearing`).then(m => m.delete(200));
    message.unpin();
  };
  if (messageReaction.emoji.name == '⛔') console.log('BAN');
}

};
