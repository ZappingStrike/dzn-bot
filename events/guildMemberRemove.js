const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = (member) => {
let memberRemove = client.guilds.channels.get('325609902422884355');
console.log(memberRemove);
memberRemove.send("Test successful, sir.");
};
