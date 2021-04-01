module.exports = {
    name: 'urban',
    description: "This command lets u to quickly search anything from urban dictionary right from discord",
    async execute(message, args){
        const querystring = require('querystring');
        const fetch = require('node-fetch');
        if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list.length) {
			return message.channel.send(`No results found for **${args.join(' ')}**.`);
		}

		const [answer] = list;

		const embed = new MessageEmbed()
     .setTitle(`${args.join(' ')}`)
     .setColor(5814783)
     .setTimestamp()
     .setThumbnail('')
     .addFields(
     { name: 'meaning', value: `${answer.definition}`},
     )
	message.channel.send(embed)
       // message.channel.send(answer.definition)
	}
}