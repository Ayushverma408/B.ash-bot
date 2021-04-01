module.exports = {
    name: 'help',
    description: "commands helper",
    execute(message, args){

        message.reply("please check your dms for the commands!");
        message.channel.send({embed: {
              color: 1339135,
              thumbnail: {
                  url: (message.author.displayAvatarURL)
                },
              fields: [
                {
                    name: ">avatar",
                    value: "Usage: >avatar | >avatar <@mention>",
                },
                {
                    name: ">dog",
                    value: "Will grab a cute dog image off the interwebs.",
                },
                {
                    name: ">info",
                    value: "Will display StrandBOT's information.",
                },
                {
                    name: ">insult",
                    value: "Usage: >insult <@mention>",
                },
                {
                    name: ">invite",
                    value: "Will send an invite link in the discord.",
                },
                {
                    name: ">level",
                    value: "Will display your current XP level.",
                },
                {
                    name: ">membercount",
                    value: "Will show how many users are in the discord.",
                },
                {
                    name: ">meme",
                    value: "Will grab a meme image off the interwebs.",
                },
                {
                    name: ">report",
                    value: "Usage: >report <@mention> <description>",
                },
                {
                    name: ">ping",
                    value: "Will show you StrandBOT's current ping.",
                },
          ],
              timestamp: new Date(),
              footer: {
                icon_url: bot.user.displayAvatarURL ,
                text: "© StrandBot",
              },
              author: {
                  icon_url: message.guild.iconURL,
                  name: "StrandBOT | Help Page: 1",
                }
          }});
        return;
    }
}