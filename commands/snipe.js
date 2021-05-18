const { Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'snipe',
    description: "get sniped lol",
    async execute(message, args){
        const msg = bot.snipes.get(message.channel.id)
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author, msg.member.user.displayAvatarURL())
        .setDescription(msg.content)
        .setFooter('Get Sniped lol')
        .setTimestamp();
        message.channel.send(embed);
    }
        // message.channel.send(answer.definition)
	}