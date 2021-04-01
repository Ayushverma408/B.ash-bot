const { Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: "list commands",
    async execute(message, args){

    const embed = new MessageEmbed()
     .setTitle(`B.ash Commands list`)
     .setColor(5814783)
     .setTimestamp()
     .setThumbnail('')
     .addFields(
     { name: 'avatar', value: `-avatar`},
     { name: 'schedule', value: `-schedule <text> <time in min>` },
     { name: 'notebook', value: `-notebook <text>` },
     { name: 'pomodoro', value: `-pomodoro <text> <time in min>` },
     { name: 'urban', value: `-urban <word>`},
     { name: 'add', value: `-add`},
     )
message.channel.send(embed)

}
}