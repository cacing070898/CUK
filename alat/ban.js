module.exports.run = (client, message) => {
    if (message.member.permissions.has("BAN_MEMBERS")) {
        const target = message.mentions.users.first();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been baned");
        } else {
            message.channel.send(`You must tag that member!`);
        }
    } else {
        message.channel.send('you dont have permission to ban member');
    }
}
module.exports.alatConfig = {
    alatName: "ban",
    alatAKA: ["banned"]
}