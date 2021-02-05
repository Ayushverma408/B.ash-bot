module.exports = {
    name: 'add',
    description: "Helps u in practicing simple arithemetic calculations.",
    execute(message, args){ 


        //Declaring random values to variable
        let x = Math.floor((Math.random() * 70) + 1);
        let y = Math.floor((Math.random() * 50) + 1);
        message.channel.send('add the no. ' + x.toString() + " and " + y.toString())
        let sum = x + y;
        
        const filter = m => !m.author.bot;
        const collector = message.channel.createMessageCollector(filter, { time: 12000 });

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

}
}