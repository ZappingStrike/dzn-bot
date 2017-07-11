module.exports = (member) => {
  let DZNrole = member.guild.roles.find('name', 'Dropzone Nation');

console.log(`${member.tag} joined the server.`);

member.send("Welcome to the Dropzone Nation Discord server!")
if(member.id == '265429575750647809') {
  member.addRole(DZNrole);
}
};
