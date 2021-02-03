module.exports = {
    name: 'hii',
    description: "this is a Hii",
    execute(message, args){
        const taggedUser = message.author

        if(message.author.id == parseInt(process.env.ONE)) {
            message.channel.send(process.env.ONEHII)
        }
        if(message.author.id == parseInt(process.env.TWO)) {
            message.channel.send(process.env.TWOHII)
        }
        if(message.author.id == parseInt(process.env.THREE)) {
            message.channel.send(process.env.THREEHII)
        }
        if(message.author.id == parseInt(process.env.FOUR)) {
            message.channel.send(process.env.FOURHII)
        }
        if(message.author.id == parseInt(process.env.FIVE)) {
            message.channel.send(process.env.FIVEHII)
        }
        else{
        message.channel.send(`${taggedUser} hewoo! `);
        }
    }
}