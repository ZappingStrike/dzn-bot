exports.run = (client, message, args) => {
  let modRole = message.guild.roles.find("name", "Moderator");
  if (!message.member.roles.has(modRole.id)) {
    var chat = client.channels.get('309774339996254208');
    return chat.send(`**${message.author.username}**: \n*${message.content}*`).catch(console.error);
  };
  if (message.mentions.users.size === 0) {
    return message.reply("Please mention the user to kick.").catch(console.error);
  };
  let kickMember = message.guild.member(message.mentions.users.first());
  if (!kickMember) {
    return message.reply("Not a valid user! Please mention a user, after the `!kick` command.");
  };
  if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("The awesome bot, me, can't kick, because I do not have the power to do so! Please give me (KICK_MEMBERS) permission.").catch(console.error);
  };
  kickMember.kick().then(member => {
    message.reply(`${member.user.username} was succesfully kicked from this server. Reason: *WIP*`).catch(console.error);
  });

//if (message.mentions(client.user).hasPermission(KICK_MEMBERS)) {
//  return message.reply("You cannot kick this person, as this account has super powerful permsissions!");
//}

};

//${member.author.username} @<192256925025566721> ${message.content}
