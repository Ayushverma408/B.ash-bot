module.exports = {
    name: 'hii',
    description: "this is a Hii",
    execute(message, args){
        const taggedUser = message.author

        message.channel.send(` ${taggedUser} hewoo!`);
    }
}