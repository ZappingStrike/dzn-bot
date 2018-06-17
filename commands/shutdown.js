// exports.run = (client, message, args) => {
//   if(message.author.id !== '192256925025566721' && message.author.id !== '198868746041819136') return;
//   message.channel.send('Are you sure you want to shutdown?\n\nReply with \`cancel\` to abort the shutdown. The shutdown will self-abort in 30 seconds');
//   return message.channel.awaitMessages(m => m.author.id === message.author.id, {
//     'errors': ['time'],
//     'max': 1,
//     time: 30000
//   }).then(resp => {
//     if (!resp) return;
//     resp = resp.array()[0];
//     let validAnswers = ['yes', 'y', 'no', 'n', 'cancel'];
//     if (validAnswers.includes(resp.content)) {
//       if (resp.content === 'cancel' || resp.content === 'no' || resp.content === 'n') {
//         return message.channel.send('shutdown aborted, sir.');
//       } else if (resp.content === 'yes' || resp.content === 'y') {
//         message.reply("Shutting down, sir!");
//         let botShutdowns = client.channels.get('313017096852471811');
//         botShutdowns.send(`**${message.author.tag}** (${message.author.id}): \n*${message.content}*`).catch(error => console.error(error))
//         .then.client.destroy().then(() => {
//           process.exit();
//         }).catch(error => console.error(error));
//       }
//     } else {
//       message.channel.send(`Only \`${validAnswers.join('`, `')}\` are valid, please supply one of those.`).catch(error => console.error(error));
//     }
//   }).catch(error => {
//     console.error(error);
//     message.channel.send('Shutdown aborted, as no response was sent.');
//   });
// };


//not actually shutting down the bot, getting an error!

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['st', 'shutdown'],
  permLevel: 4
};

exports.help = {
  name: 'shutdown',
  description: 'Shutdown the bot.',
  usage: 'shotdown',
  category: 'System'
};
