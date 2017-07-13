exports.run = function(client, message, args) {
//   let messagecount = parseInt(args.join(' '));
//   let mention = message.mentions.members.first();
//
//   if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) {
//     message.reply("I don't have the permission to manage messages in this server.");
//   } else
//
// if(!messagecount) {
//   return message.reply("please provide an amount to delete.")
// } else
// //weird errors
//   if(!mention) { try {
//   message.channel.fetchMessages({
//     limit: messagecount
//   }).then(messages => message.channel.bulkDelete(messages));
//   message.reply(`${messagecount} messages have been successfully deleted.`).setTimeout(message.delete(), 30)
// } catch (err) {
//   console.error(err);
// message.channel.send("**ERROR**, you can't delete messages older than 14 days.")};
// };

let user = message.mentions.users.first();
const amount = !!user ? parseInt(message.content.split(" ")[2], 10) : parseInt(message.content.split(" ")[1], 10);
  // let amount = parseInt(args.join(' '));


if (!amount) return message.reply('please provide a number of messages to delete.');
if (amount > 99) return message.reply('please provide a number between 2 an 99.');
if (amount < 2) return message.reply('please provide a number between 2 an 99.');
if (!amount && !user) return message.reply('please specify a user and/or an amount of messages to clean.');

try {
   message.channel.fetchMessages({
  limit: amount,
}).then((messages) => {
  if (user) {
    const filterBy = user ? user.id : Client.user.id;
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
  }
  // message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
  message.channel.bulkDelete(messages).catch(message.reply("**ERROR** accured."));
})
} catch (err) {
  // message.channel.send("**ERROR**, you can't delete messages older than 14 days.")};
return
};

process.on('unhandledRejection', error => {
  console.error(`Uncaught Promise Error BUT IT HAS BEEN CAUGHT: \n${error.stack}`);
});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['c', 'clean', 'purge', 'delete'],
  permLevel: 3
};

exports.help = {
  name: 'clean',
  description: 'Clean X messages.',
  usage: 'clean WIP'
};
