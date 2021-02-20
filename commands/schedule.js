const { MessageEmbed, Channel } = require("discord.js");

module.exports = {
    name: 'schedule',
    description: "Send the message only when the time is right",
    execute(message, args){

        //had to convert into string for split fucntion
        str = args.toString();
        message.delete()
        let time = str.split(/[, ]+/).pop();
        function myFunc(arg) {
            console.log(`arg was => ${arg}`);
            //message.channel.send(`from ${message.author}: \n${args.join(" ")}`);
            const embed = new MessageEmbed()
            .setDescription(args.join(" "))
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            message.channel.send(embed)
          }
          setTimeout(myFunc, 1000*time, 'finished'); 
}
}

/* Input syntax: -schedule Text Goes Here even line breaks are 
maintained well only the last element should be an integer which will be in minutes for custom time 10*/