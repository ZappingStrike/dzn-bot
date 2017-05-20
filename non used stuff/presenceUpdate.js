// exports.run = (oldMember, newMember) => {
//   let guild = newMember.guild;
//   let playRole = guild.roles.find("name", "Playing Dropzone");
//   if(!playRole) return;
//
//   if(newMember.user.presence.game && newMember.user.presence.game.name === "Dropzone") {
//     newMember.addRole(playRole);
//   } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
//     newMember.removeRole(playRole);
//   }
// };

//Works, but isn't used
