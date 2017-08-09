const chalk = require('chalk');
const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = (client) => {
  console.log(chalk.bgGreen.black(`Ready to drop some awesomeness, for a total of ${client.users.size} users.`));
  client.user.setGame('Direct Message me for help!'/*, 'https://www.twitch.tv/dropzonenation'*/);
  client.user.setStatus('invisible');
};
