const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("679443341074759690")
setInterval(function() {
channel.send(`2الحلو`);
}, 30)
})

client.login(process.env.BOT_TOKEN);