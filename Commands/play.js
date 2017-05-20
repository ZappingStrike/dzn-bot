// exports.run = (client, message, args) => {
//   if (message.content.startsWith('++play')) {
//     const voiceChannel = message.member.voiceChannel;
//     if (!voiceChannel) {
//       return message.reply(`Please be in a voice channel first!`);
//     }
//     voiceChannel.join()
//       .then(connnection => {
//         let stream = yt('https://www.youtube.com/watch?v=dQw4w9WgXcQ', {audioonly: true});
//         const dispatcher = connnection.playStream(stream);
//         dispatcher.on('end', () => {
//           voiceChannel.leave();
//         });
//       });
// };


//DOES NOT WORK
