exports.run = (client, message, args) => {
    message.author.send("Do you have any questions about us, or our events? Then please DM the bot. If you need in game support, please post your query in #support-bugs or open a support ticket here: <http://support.dropzone.gameforge.com/>").catch(console.error);
    message.react('✅').catch(console.error);
}
