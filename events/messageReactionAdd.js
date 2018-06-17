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
 };

// // Swearing Moderation
// if (channel.id == '324185554897993729') {

// // New Stuff
//    let swearGuyID0 = message.content.split('Message Author ID: ')[1];
//    let swearGuyID = swearGuyID0.split('\n')[0];
//    let swearMessage0 = message.content.split('Message ID: ')[1];
//    let swearMessage = swearMessage0.split('\n')[0];
//    let swearChannelID0 = message.content.split('Channel ID: ')[1];
//    let swearChannelID = swearChannelID0.split('\n')[0];

//    let defaultInfo = `\nMessage ID: ${swearGuyID}\nChannel ID: ${swearChannelID}\nMessage Author ID: ${swearGuyID}`

//   // General Stuff
//   // let args = message.content.split('-')
//   // let badguyID = args[1];
//   // let messageID = args[0];
//   let debugMessage = 'Error occured, check the console for more information.';

//   // Emoji Declerations
//   let yesNoEmojis = ['✅', '❌'];
//   let validModjis = ['⚠', '❌', '🚷', '⛔'];
//   let warnmojis = ['✅', '🇫', '🇹'];

// // Warning Templates
//   let defaultTemplate = 'Hello, \nYou are hereby receiving a warning for swearing in our server.';
//   let checkingDefault = 'Are you sure you want to warn this user with the default template?';
//   let notWarning = 'The user will **not** be warned. If you want to warn him nevertheless, please react with the correct emoji to the corresponding message.'
//   let warningUser     = `Warning a user is done through private messages. Do you want to use the default warning text, or customize it?\n:regional_indicator_f: for customizing the reason\n:regional_indicator_t: for sending the user a total customized text (not using the template)\n:white_check_mark: for using the default template.\n:information_source: for not sending out a warning\nPlease react to this message with your choice!`

//   // Kicking Templates
//   let kickCheck = 'Do you really want to kick this user from the DZN Discord server?';
//   let dismissed = '**CANCELLED**, please dismiss the flagged message by reaction with the corresponding emoji.';

//   // Delete Message Check
//   let deleteCheck = 'Are you sure you want to delete the bad message?';

//   // Ban Checks
//   let banCheck = 'Are you sure you want to ban this person?';

//   if (user.id == '304613358014038017') return;

// // Checking if you really want to delete the message
// if (message.content.includes(deleteCheck)) {
//   if (!yesNoEmojis.includes(messageReaction.emoji.name)) return;
//   if (messageReaction.emoji.name == '✅') {
//     let swearChannel = client.channels.get('324185554897993729');
//     let fetchedMessage = swearChannel.fetchMessage(swearMessage);
//     console.log(fetchedMessage);
// }
// };
// // Checking if you want to really send the default Template
// if (message.content.includes(checkingDefault)) {
//   if (!yesNoEmojis.includes(messageReaction.emoji.name)) return;
//   switch (messageReaction.emoji.name) {
//     case '✅':
//     message.channel.send(`!send ${swearGuyID} ${defaultTemplate}`);
//     break;

//     case 'ℹ':
//     message.channel.send(notWarning);
//     break;

//     default:
//     message.channel.send(debugMessage);
//     console.log('Error, while asking the Mod if he really wants to send the default template.');
//     break;
//   }
//   // if (messageReaction.emoji.name == '✅') message.channel.send(`!send ${badguyID} ${defaultTemplate}`);
// }

// // Which template do you want to send?
// if (message.content.includes(warningUser)) {
// switch (messageReaction.emoji.name) {
//   case '✅':
//   message.delete();
//   message.channel.send(checkingDefault + defaultInfo).then(msg => {
//     msg.react('✅');
//     msg.react('ℹ');
//   });
//     break;

//     case 'ℹ':
//     message.channel.send(notWarning);
//     break;

//   default:
//   console.log('Error occured while asking which template (warning) to send.');
//   message.channel.send(debugMessage);
//   break;
// }
// };

// // Do you really want to kick check?
// if (message.content.includes(kickCheck)) {
//   let validmojis = ['✅', '❌'];
//   if (!validmojis.includes(messageReaction.emoji.name)) return;

//   if (messageReaction.emoji.name == '✅') message.delete();
//   return message.channel.send(`!kick <@${badguyID}> swearing`).then(m => m.delete(200));

//   if (messageReaction.emoji.name == '❌') message.delete();
//   return message.channel.send(dismissed);
// };

//   // Checking if the Reaction is correct
//   if (!validModjis.includes(messageReaction.emoji.name)) return;

// // ASKING WHICH MOD ACTION
// switch (messageReaction.emoji.name) {
//   // Warning
//   case '⚠':
//   message.channel.send(warningUser + defaultInfo)
//   .then(msg => {
//   msg.react('✅');
//   msg.react('🇫');
//   msg.react('🇹');
//   msg.react('ℹ');
// });
// break;

// // Dismiss
// case '❌':
//  message.channel.send(deleteCheck + defaultInfo)
//  .then(m => {
//    m.react('✅');
//    m.react('❌') });
//  break;

// // Kick
//  case '🚷':
//  message.channel.send(kickCheck + defaultInfo).then(m => {
//    m.react('✅');
//    m.react('❌') });
//     break;

// // Ban
//     case '⛔':
//     message.channel.send(banCheck + defaultInfo).then(m => {
//       m.react('✅');
//       m.react('❌') });
//     break;

// // Error
//   default:
//   console.log('Error happened while reacting to a flagges message.');
//   message.channel.send(debugMessage);
//   break;
// }

// }
};
