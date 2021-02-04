require('dotenv').config();

//Using Client, Bot is a subclass of CLient.

const Discord = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();
const fs = require('fs');
const fetch = require('node-fetch');
const querystring = require('querystring');

const prefix = '-';


client.commands = new Discord.Collection();

//Font setting

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 30;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};



//end of font settings






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
		status: 'online',
		activity: {
			name: 'KALM',
			type: 'PLAYING'
					}
		})
});


//Client.on is Inititated here
// Welcome message
client.on('guildMemberAdd',async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 500);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./newfriend.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use helpful Attachment class structure to process the file for you
	ctx.strokeStyle = '#202020';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Select the font size and type from one of the natively available fonts
	ctx.font = '30px sans-serif';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffffff';
	// Actually fill the text with a solid color
	ctx.fillText(`, ${member.displayName}`, canvas.width / 1.5, canvas.height / 1.06);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');
	channel.send(`Welcome to the server, ${member}! \nWe are totally not creepy AT ALL >.<`, attachment);
});
//


//			Prefix args and command 

client.on('message', async message =>{

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	//fake welcomee
	if (command === 'join') {
		client.emit('guildMemberAdd', message.member);
	}

	//hii command
	if(command === 'hii'){
		client.commands.get('hii').execute(message, args);
		
	}

	//pomodoro
	if(command === 'pomodoro'){
		client.commands.get('pomodoro').execute(message, args);
		
	}

	//notebook canvas
	if(command === 'notebook'){
		
	const canvas = Canvas.createCanvas(530, 500);
	const ctx = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('./notebook.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use helpful Attachment class structure to process the file for you

	ctx.strokeStyle = '#202020';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Select the font size and type from one of the natively available fonts
	ctx.font = '22px sans-serif';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#202020';
	// Actually fill the text with a solid color
	ctx.fillText(`${args.join(" ")}`, canvas.width / 12, canvas.height /2.15);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'letter.png');

	message.channel.send(attachment);
		
	}
	//notebook canvas end 

	//urban dictionary
	if (command === 'urban') {
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