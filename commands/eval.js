exports.run = async (client, message, args) => {
  const code = args.join(' ');
  try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }



  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

// const clean = text => {
//   if (typeof(text) === "string")
//     return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
//   else
//       return text;
// }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eval', 'e'],
  permLevel: 10,
  dmable: false
};

exports.help = {
  name: 'eval',
  description: 'Evaluates arbitrary Javascript.',
  usage: 'eval <expression>',
  category: 'System'
};
