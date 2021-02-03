require('dotenv').config();

//Using Client, Bot is a subclass of CLient.

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const fetch = require('node-fetch');
const querystring = require('querystring');

const prefix = '-';


client.commands = new Discord.Collection();


//Reading Files

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


//			Prefix args and command 

client.on('message', async message =>{

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	//hii command
	if(command === 'hii'){
		client.commands.get('hii').execute(message, args);
		
	}

	//pomodoro
	if(command === 'pomodoro'){
		client.commands.get('pomodoro').execute(message, args);
		
	}


	//urban dictionary
	else if (command === 'urban') {
		if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list.length) {
			return message.channel.send(`No results found for **${args.join(' ')}**.`);
		}

		const [answer] = list;

        message.channel.send(answer.definition)
	}
	//urban disctionary end


});

// END OF Index.js
client.login(process.env.TOKEN);