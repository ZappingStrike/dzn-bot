const exec = require('child_process').exec;
exports.run = function(client, message, args) {
  exec(`${args.join(' ')}`, (error, stdout) => {
    const response = (error || stdout);
    message.channel.send(`Ran: ${message.content}\n\`\`\`${response}\`\`\``, {split: true})
      .catch(console.error);
  });
};

exports.conf = {
  guildOnly: false,
  aliases: ['berry'],
  permLevel: 10,
  dmable: true,
};

exports.help = {
  name: 'cmd',
  description: 'executes a new process, very dangerous',
  usage: 'exec <expression>',
  category: 'System'
};
