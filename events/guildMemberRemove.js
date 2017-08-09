const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('../config.json');

module.exports = (member) => {
  let guild = member.guild;
  let memberRemove = guild.channels.find('name', 'mod-log');
// memberRemove.send(`Someone left the server <@${config.ownerid}>`);
};
