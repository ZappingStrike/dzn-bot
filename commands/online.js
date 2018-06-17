exports.run = (client, message, args) => {
  let DZNRole = message.guild.roles.find("name", "Dropzone Nation")
  if(!message.member.roles.has(DZNRole.id)) return;
    message.channel.send(`Currently, **${client.users.size}** online users`).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['online'],
  permLevel: 2,
  dmable: false
};

exports.help = {
  name: 'online',
  description: 'Check how many online users there are.',
  usage: 'online',
  category: 'Help'
};
