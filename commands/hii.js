module.exports = {
    name: 'hii',
    description: "this is a Hii",
    execute(message, args){

        if(message.author.id == parseInt(process.env.ONE)) {
            message.channel.send(process.env.ONEHII)
        }
        else if(message.author.id == parseInt(process.env.TWO)) {
            message.channel.send(process.env.TWOHII)
        }
        else if(message.author.id == parseInt(process.env.THREE)) {
            message.channel.send(process.env.THREEHII)
        }
        else if(message.author.id == parseInt(process.env.FOUR)) {
            message.channel.send(process.env.FOURHII)
        }
        else if(message.author.id == parseInt(process.env.FIVE)) {
            message.channel.send(process.env.FIVEHII)
        }
        else{
        message.channel.send(`${message.author} hewoo!`);
        }
    }
}