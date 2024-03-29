require('dotenv').config();

//Using Client, Bot is a subclass of CLient.

const Discord = require('discord.js');
const Canvas = require('canvas');

//const client = new Discord.Client();
const bot = new Discord.Client();

const fs = require('fs');
const fetch = require('node-fetch');
const querystring = require('querystring');

const prefix = '-';


//client.commands = new Discord.Collection();
bot.commands = new Discord.Collection();

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

	//client.commands.set(command.name, command);
	bot.commands.set(command.name, command);
}

// Setting up status presence and logging ready when on.

//client.once('ready', () => {
	bot.once('ready', () => {
	console.log('Ready!');
	//client.user.setStatus('online')
	bot.user.setStatus('online')
	//client.user.setPresence({
	bot.user.setPresence({
		status: 'online',
		activity: {
			name: '|',
			type: 'PLAYING'
					}
		})
});


//Client.on is Inititated here
// Welcome message
/*bot.on('guildMemberAdd',async member => {
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
*/

//			Prefix args and command 

//client.on('message', async message =>{
	bot.on('message', async message =>{

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	//fake welcomee
	if (command === 'join') {
		//client.emit('guildMemberAdd', message.member);
		bot.emit('guildMemberAdd', message.member);
	}

	//hii command
	if(command === 'hii'){
		//client.commands.get('hii').execute(message, args);
		bot.commands.get('hii').execute(message, args);
		
	}

	//help command
	if(command === 'help'){
		//client.commands.get('help').execute(message, args);
		bot.commands.get('help').execute(message, args);
	}

	//avatar
	if(command === 'avatar'){
		//client.commands.get('avatar').execute(message, args);
		bot.commands.get('avatar').execute(message, args);
		
	}

	//pomodoro
	if(command === 'pomodoro'){
		//client.commands.get('pomodoro').execute(message, args);
		bot.commands.get('pomodoro').execute(message, args);
		
	}
	//notebook
	if(command === 'notebook'){
		//client.commands.get('notebook').execute(message, args);
		bot.commands.get('notebook').execute(message, args);
		message.delete()

		
	}
	//urban
	if(command === 'urban'){
		//client.commands.get('urban').execute(message, args);
		bot.commands.get('urban').execute(message, args);
		message.delete()

	
	}
	
	if(command === 'snipe'){
		bot.commands.get('snipe').execute(bot, message, args);
		message.delete()
	
	}

	/*add
	if(command === 'add'){
		client.commands.get('add').execute(message, args);
		
	}*/
	//schedule send
	if(command === 'schedule'){
		//client.commands.get('schedule').execute(message, args);
		bot.commands.get('schedule').execute(message, args);
		
	}
	//bulkdelete
	if(command === 'bulkdelete'){
		//client.commands.get('bulkdelete').execute(message, args);
		bot.commands.get('bulkdelete').execute(message, args);
	}

	//king role
	if(command === 'myrole'){
		//client.commands.get('bulkdelete').execute(message, args);
		bot.commands.get('myrole').execute(message, args);
	}


	//nico nico nii <3
	if(command === 'niconiconii'){
		message.delete()
		message.channel.send("https://tenor.com/view/nico-nico-nii-gif-19262246");
	}
	//senzawa dabs owo
	if(command === 'dab'){
		message.delete()
		message.channel.send("https://tenor.com/view/senzawa-dab-anime-gif-14393186");
	}

});

// END OF Index.js
//client.login(process.env.token);
//client.login(process.env.TOKEN);
//bot.login(process.env.TOKEN);
bot.login(process.env.token);
