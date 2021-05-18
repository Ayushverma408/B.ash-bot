const { Message, MessageEmbed, Client } = require('discord.js');

module.exports = {
    name: 'snipe',
    description: "get sniped lol",
    async execute(message, args){
        const msg = client.snipes.get(message.channel.id)

        if (!msg) return message.channel.send(`That is not a valid snipe...`);

        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author, msg.member.user.displayAvatarURL())
        .setDescription(msg.content)
        .setFooter('Get Sniped lol')
        .setTimestamp();
        if (msg.image) embed.setImage(msg.image);
        message.channel.send(embed);
    }
        // message.channel.send(answer.definition)
	}