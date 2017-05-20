exports.run = (client, message, args) => {
    message.channel.send("is awesome.").catch(console.error);
}
