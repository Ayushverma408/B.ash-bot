module.exports = {
    name: 'pomodoro',
    description: "A short timer to focus on work, It will remind when the time's up",
    execute(message, args){

        message.channel.send(` ${message.author} Pomodoro started for ${args} min! \n Go work now :3`);
        message.react('🍅');
        function myFunc(arg) {
            console.log(`arg was => ${arg}`);
            message.channel.send(`${message.author} Pomodoro finished \nHave some rest now :>`);
          }
          setTimeout(myFunc, 1000*args*60, 'finished'); 
}
}