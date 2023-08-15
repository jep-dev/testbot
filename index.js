//const Discord = require('discord.js');
//const client = new Discord.Client();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
});
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
	if(msg.content.startsWith("!hello")) {
		msg.reply("world!");
	}
});

client.login('MTE0MTAxNzcxOTQ3NTU0MDAzOA.GmNWti.NWeMOUoLeqjGJZk9P-7VdZVokCFu4Km-pv3lDk')
