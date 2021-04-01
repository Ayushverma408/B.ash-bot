module.exports.run = async(message ) => {
    fs.readdir("./commands/", (err, files) => {
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <= 0) {
            console.log("No commands to load!");
            return;
        }


        let result = jsfiles.forEach((f, i) => {
            let props = require(`./${f}`);
            let filesArray = [props.help.name, props.help.description]
            //let filesArray = [props.help.name, props.help.description, props.help.usage]
            message.author.send(`**${filesArray[0]}** \n${filesArray[1]}`);
            //message.author.send(`**${filesArray[0]}** \n${filesArray[1]} \n${filesArray[2]}`);
        });

    });
}

module.exports = {
    name: 'help',
    description: "brrrrrrrrb",
    async execute(message, args){

        message.channel.send(` ${message.author} Pomodoro started for ${args} min! \n Go work now :3`);
        message.react('🍅');
        function myFunc(arg) {
            console.log(`arg was => ${arg}`);
            message.channel.send(`${message.author} Pomodoro finished \nHave some rest now :>`);
          }
          setTimeout(myFunc, 1000*args*60, 'finished'); 
}
}