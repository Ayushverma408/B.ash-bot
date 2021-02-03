require('dotenv').config();
//Using Client, Bot is a subclass of CLient.

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = '-';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

// Setting up status presence and logging ready when on.

client.once('ready', () => {
	console.log('Ready!');
	client.user.setStatus('Available')
	client.user.setPresence({
		status: 'idle',
		activity: {
			name: 'KALM',
			type: 'PLAYING'
					}
		})
});


//Client.on is Inititated here

client.on('message', message =>{

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'hii'){
		client.commands.get('hii').execute(message, args);
		
	}
});

// END OF Index.js
client.login(process.env.TOKEN);