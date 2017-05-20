const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const fs = require("fs");

client.login(config.token);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", (message) => {
  if (message.author.bot) return;

  if(message.content.includes("https://discord.gg/")) {
    if (message.content.includes("https://discord.gg/ezacvzR")) return;
    if (message.content.includes("https://discord.gg/5zrGMY9")) return;
    var discordInvites = client.channels.get('312918635536711680');
    let msg = message.delete().then(msg => discordInvites.send(`**${message.author.tag}** (${message.author.id}): \n*${message.content}*`)).then(msg => {
      msg.react('⚠');
      msg.react('❌');
      msg.react('🚷');
      msg.react('⛔');
    });
  };


    // var discordInvites = client.channels.get('312918635536711680');
    // discordInvites.send('DONE SIR!');

    return message.awaitReactions(r => r.author.id === '192256925025566721', {
      'errors': ['time'],
      'max': 1,
      time: 30000
    }).then(reac => {
      if (!reac) return;
      reac = reac.array()[0];
      let validReactions = ['⚠', '❌', '🚷', '⛔'];
      if (validReactions.includes(reac.content)) {
        if (reac.content === '⚠' || reac.content === '❌' || reac.content === '🚷' || reac.content === '⛔' ) {
          message.reply("Well done, sir!");
        };
      }
    }).catch(error => {
      console.error(error);
      message.channel.send('ERROR');
    });


    // await member.guild.react('❌') {
    //   message.reply("SUCCESS!");
    // };
  // }

//bad words ts ts ts
var badWords = [
  "fuck", "shit"
]
  if (message.content.includes(badWords)) {
    var deletedContent = client.channels.get('312894658718203904')
    message.delete().then(msg => deletedContent.sendMessage(`${message.content}`)).catch(console.error);
  };

  if (message.channel.type !== 'text' && !message.content.startsWith(config.prefix + "DZN") && !message.content.startsWith(config.prefix + "contact")) {
  //   if (!message.content.startsWith(config.prefix + "DZN") && !message.content.startsWith(config.prefix + "contact")) {
    message.reply("All commands are disabled in direct messages, except `!DZN` to contact us directly.").catch(console.log);
    var chat = client.channels.get('309731091520946177');
    return chat.sendMessage(`**${message.author.username}**#${message.author.discriminator}(${message.author.id}): \n*${message.content}*`);
  };

  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
} catch (err) {
  return;
}
});

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
};

client.on('message', message => {
  if(message.author.id !== config.ownerid) return;
  const prefix = "!!!";
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + "eval")) {
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

//==I don't know if this feature will be used==

//client.on("presenceUpdate", (oldMember, newMember) => {
//  let guild = newMember.guild;
//  let playRole = guild.roles.find("name", "Playing Dropzone");
//  if(!playRole) return;

//  if(newMember.user.presence.game && newMember.user.presence.game.name === "Dropzone") {
//    newMember.addRole(playRole);
//  } else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
//    newMember.removeRole(playRole);
//  }
//});

//message.User.sendMessage
//Message.mentions.users.first().sendMessage("Text")

//CLS
