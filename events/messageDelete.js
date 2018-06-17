const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = (message) => {
let deleted = message.guild.channels.find('name', 'deleted-messages');
const embed = new Discord.RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setColor(0x00AE86)
.setDescription(`**Message Content**: \n${message.content} \n**Channel**: ${message.channel} \n**Server**: ${message.guild}`)
.setTimestamp(message.createdAt);
deleted.send({embed});
};
