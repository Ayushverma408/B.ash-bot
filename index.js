require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

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
client.login(process.env.TOKEN);