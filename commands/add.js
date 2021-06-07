module.exports = {
    name: 'add',
    description: "Helps u in practicing simple arithemetic calculations.",
    execute(message, args){ 

        //const filter = m => !m.message.author;
        const filter = member => member.presence.status !== 'offline'
        //Declaring random values to variable
        let x = Math.floor((Math.random() * 70) + 1);
        let y = Math.floor((Math.random() * 70) + 1);
        message.channel.send('add the no. ' + x.toString() + " and " + y.toString()).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.first().author} got the correct answer!`);
                })
                .catch(collected => {
                    message.channel.send('Looks like nobody got the answer this time.');
                });
            });
        let sum = x + y;
        

        /*
        const collector = message.channel.createMessageCollector(filter, { time: 120000 });
        
        collector.on('collect', m => {
	    console.log(`Collected ${m.content}`);
        if(m.content == sum){
            message.channel.send(`${message.author} Yes u got it right!`);
            collector.stop()
        }
        else{
            message.channel.send(`${message.author} wrong, the right answer is ${sum}`);
            collector.stop()
        }
        });

        collector.on('end', collected => {
	    console.log(`Collected ${collected.size} items`);
        if(collected.size == 0){
            message.channel.send(`You did not answer in time.\nAnyways the correct answer is ${sum}`);
        }
        });
        
        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.first().author} got the correct answer!`);
                })
                .catch(collected => {
                    message.channel.send('Looks like nobody got the answer this time.');
                });
        */

}
}