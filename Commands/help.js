// exports.run = (client, message, args) => {
//     message.channel.send("Heyo! If you need any help or information regarding our Discord server please DM me, and then a DZN staff member will get in contact with you, as soon as possible! For a list of avaliable commands, please use `!commands`.").catch(console.error);
// }

const config = require('../config.json');
exports.run = (client, message, args) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`= Commands List =\n\n[Use ${config.prefix}help <commandname> for details]\n\n${client.commands.map(c => `${config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \nDiscription :: ${command.help.description}\nUsage :: ${command.help.usage}`, {code:'asciidoc'});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
