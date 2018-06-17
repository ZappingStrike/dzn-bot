exports.run = (client, message, args) => {  
  // Defining Stuff
  let bannedDude = message.mentions.members.first();
  let reason = message.content.split(' ').slice(2).join(' ');
  let banChannel = client.channels.get('325221356859949056');
  let guild = client.guilds.get('206791407141257216');
    
  // Ban Perms Check
  try {
  if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
     return message.reply("I don't have the power to ban here.");
   };
  return;
  // Mention Check
  if(!bannedDude) {
     return message.reply("You must mention a user to kick.");
   };
  // Bot check
  if(message.isMentioned(client.user)) {
    return message.reply("You cannot ever kick me! Why would you like to do that? I'm the best bot in the universe.");
  };
  // Owner Check
  if(message.isMentioned(config.ownerid)) {
    return message.reply(`You want to kick <@${config.ownerid}>?! I would not try to do that, or you might be in trouble...`);
  };
  // DZN check
  if(bannedDude.hasPermission('VIEW_AUDIT_LOG')) {
    return message.reply(`The Dropzone Nation staff is awesome, you can't possibly kick a staff member, c'mon :D`);
  }
  // Kickable Check
  if(!message.guild.member(bannedDude).kickable) {
   return message.reply("Cannot kick that member, because he has more permissions than me.");
  };
  // Reason Needed
  if(!reason) {
    return message.reply("Please provide a reason, after the mention.");
  };
  message.channel.send('Test')
  
  // Create Embed
  const embed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Kick\n**Target:** <@${bannedDude.id}>\n**Reason:** \`\`${reason}\`\``)
   banChannel.send({embed})
   guild.ban(bannedDude.id, [{days: 1, reason: reason}])
   .then(message.react("👌"));
   } catch (e) {
     console.log(e);
   };
  
};
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['b', 'hammer'],
    permLevel: 5,
    dmable: false
  };
  
  exports.help = {
    name: 'ban',
    description: 'Swings the banhammer.',
    usage: 'ban <mention> <reason>',
    category: 'Moderation'
  };  
