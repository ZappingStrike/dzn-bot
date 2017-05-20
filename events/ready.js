exports.run = (client) => {
  console.log(`Ready to drop some awesomeness, for a total of ${client.users.size} users.`);
  client.user.setGame("Direct Message me for help!");
};
