module.exports = {
    name: 'bulkdelete',
    description: "Useful to delete bulk of messages",
    execute(message, args){


        if(message.author.id == parseInt(process.env.SEVEN)) {
            const deleteCount = parseInt(args[0], 10);
            if (!deleteCount || deleteCount < 1 || deleteCount > 100) return;
                message.channel.bulkDelete(deleteCount + 1).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        }
        
}
}