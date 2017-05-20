exports.run = (client, message, args) => {
    let DZNRole = message.guild.roles.find("name", "Dropzone Nation");
    if (message.member.roles.has(DZNRole.id)) {
      message.author.send("The current **internal** roles are: \n `!kick` only for Moderators \n `!reload` only usable by the overlord \n `!oval` only usable by the overlord (manual overrides everything) \n `!online` return the value of how many online members there are (please only use it in internal channels)").catch(console.error);
    };
    message.author.send("The current commands are: \n `!about` \n `!hello` \n `!help` \n `!hivebuster` \n `!homepage` \n `!ping` \n `!support` \n `!Pandora` \n `!ZappingStrike`").catch(console.error);
    message.react('✅').catch(console.error);
}
