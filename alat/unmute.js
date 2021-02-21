module.exports.run = (client, message, args) => {
    const target = message.mentions.users.first();
    if(target){
        let mainRole = message.guild.roles.cache.find(role => role.id === process.env.rolemember);
        let muteRole = message.guild.roles.cache.find(role => role.id === process.env.rolemute);

        let memberTarget= message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
    } else{
        message.channel.send('Cant find that member!');
    }
}
module.exports.alatConfig = {
    alatName: "unmute",
    alatAKA: ["unm","unmt"]
}