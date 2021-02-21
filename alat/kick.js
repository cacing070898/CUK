module.exports.run = (client, message, args) => {
    if (message.member.permissions.has("KICK_MEMBERS")) {
        const target = message.mentions.users.first();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        } else {
            message.channel.send(`You must tag that member!`);
        }
    } else {
        message.channel.send('you dont have permission to kick member');
    }
}
module.exports.alatConfig = {
    alatName: "kick",
    alatAKA: ["kickmember", "km"]
}
