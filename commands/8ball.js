exports.run = (client, message, args) => {
  let question = message.content.split(' ').slice(1).join(' ');

  if(message.channel.id !== '312890068257865738' && message.channel.id !== '272502100309704705') return;

  if(!question) {

 return message.reply("You must ask a question.");
 };
  let responses = [
    'yes', 'no', 'Pandora', 'maybe', 'Dropzone', 'possibly', 'That is a mystery.', 'sure', 'NOPE', 'nah'
  ]
  message.reply(`${responses[Math.floor(Math.random() * responses.length)]}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['8', '8ball'],
  permLevel: 1
};

exports.help = {
  name: '8ball',
  description: 'Ask me any questions, once only!',
  usage: '8ball [question]'
};
