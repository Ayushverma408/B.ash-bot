module.exports = {
    name: 'myrole',
    description: "yashu role",
    async execute(message, args){


        // const role = bot.roles.cache.find(r => r.id === "809072067483402320");

        // let nole = message.guild.roles.get("914642562705408070");

        // let pole = message.guild.roles.cache.find(role => role.name === "testrole");

        // if(message.author.id == parseInt(process.env.SEVEN)) {

        //     await message.author.roles.add(pole);
        // }
        let role = message.member.guild.roles.cache.find(role => role.name === "testrole");
        if (role) message.guild.members.cache.get(message.author.id).roles.add(role);

}
}