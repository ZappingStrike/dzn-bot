exports.run = (client, message, args) => {
  let DZNRole = message.guild.roles.find("name", "Dropzone Nation")
  if(!message.member.roles.has(DZNRole.id)) return;
    message.channel.send(`Currently, **${client.users.size}** online users`).catch(console.error);
};
