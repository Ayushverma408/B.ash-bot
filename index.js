require('dotenv').config();
//Using Client, Bot is a subclass of CLient.

const Discord = require('discord.js');
const client = new Discord.Client();




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

client.on('message', message => {
	console.log(message.content);

if (message.content === 'Moron') {
	// send back "Pong." to the channel the message was sent in
    message.channel.send('No U Stoopid');
}

if (message.content === 'Cool') {
	// send back "Pong." to the channel the message was sent in
    message.channel.send('Yes very');
}

if (message.content === 'Damn!') {
	// send back "Pong." to the channel the message was sent in
    message.channel.send('Not yashu talking to a bot like talking talking');
}

if (message.content === 'ooof') {
	// send back "Pong." to the channel the message was sent in
    message.channel.send('Shut.... SHUSH');
    //just a change
}
});



// END OF Index.js
client.login(process.env.TOKEN);