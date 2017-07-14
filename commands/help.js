const config = require('../config.json');
exports.run = async (client, message, params) => {
  const permission = client.elevation(message);
  const commandNames = Array.from(client.commands.keys());
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  try {
    if (!params[0]) {
      await message.channel.send(`= Command List =\n\n[Use ${config.prefix}help [comadnname] for details]\n\n${client.commands.filter(cmd => cmd.conf.permLevel <= permission).map(c => `${config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
    } else {
      let command = params[0];
      if (client.commands.has(command)) {
        command = client.commands.get(command);
        await message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUsage:: ${command.help.usage}\nAliases:: ${command.conf.aliases}`, {code:'asciidoc'});
      }
    }
  } catch (e) {
    console.log(e);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0,
  dmable: false
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
