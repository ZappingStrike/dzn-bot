exports.run = (client, message, args) => {
    if(message.channel.type == 'text') {
      return message.author.send("This is a command used to contact us directly. Please us it Direct Message me, for more information.")
    } else
    message.author.send("Hello there! \nIf you want to contact us for any reason, please do not hesitate to do so! Simply send `!Contact` and then your desired message and it will be forwarded to us. We will then reply to you as soon as possible. Please note that all rules that apply to the Drozpone Nation Server, apply here too.").catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['DZN', 'DZNContact'],
  permLevel: 0
};

exports.help = {
  name: 'DZN',
  description: 'How to contact us.',
  usage: 'DZN'
};
