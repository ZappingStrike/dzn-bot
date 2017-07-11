const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = (message) => {
let deleted = message.guild.channels.find('name', 'deleted-messages');
if(!deleted) return console.log("No deleted_messages channel found, when someone deleted a message.");

const embed = new Discord.RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setColor(0x00AE86)
.setDescription(`${message.content}`)
.setTimestamp(message.createdAt);
deleted.send({embed});
};
