const chalk = require('chalk');
const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = (client) => {
  console.log(chalk.bgGreen.black(`Ready to drop some awesomeness, for a total of ${client.users.size} users.`));
  client.user.setGame("Direct Message me for help!");
  // console.log(chalk.bgGreen.black('I\'m Online\nI\'m Online'));
};
