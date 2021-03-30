const Discord = require("discord.js");
module.exports = {
    name: 'avatar',
    description: "use this command to preview your avatar inn higher resolution",
    async execute(message, args){
    
    let msg = await message.channel.send("Generating avatar...");

    if(message.mentions.users.size){
        let member=message.mentions.users.first()
            
        if(member){
            const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL({size: 2048})).setTitle(member.username)
            message.channel.send(emb)
                
        }
        else{
            message.channel.send("Sorry none found with that name")
    
        }
        }else{
            const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL({size: 2048})).setTitle(message.author.username)
            message.channel.send(emb)
            }
            msg.delete();
}
}