exports.run = (client, message, args) => {
    message.author.send("You can find our website here: <http://www.dropzonenation.com/> we have lots of content there, from guides, videos until annuncements for our events! For our current event type `!hivebuster`.").catch(console.error);
    message.react('✅').catch(console.error);
}
