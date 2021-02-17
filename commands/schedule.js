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
            message.channel.send(`from ${message.author}: \n${args.join(" ")}`);
          }
          setTimeout(myFunc, 1000*time*60, 'finished'); 
}
}

/* Input syntax: -schedule Text Goes Here even line breaks are 
maintained well only the last element should be an integer which will be in minutes for custom time 10*/