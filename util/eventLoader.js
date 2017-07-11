const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
  client.on('messageReactionAdd', reqEvent('messageReactionAdd'));
  client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
  client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
  client.on('messageDelete', reqEvent('messageDelete'));
};
