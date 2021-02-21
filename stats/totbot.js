require("dotenv").config();
module.exports = async (client,) => {
    const guild = client.guilds.cache.get(process.env.guild)
    const count = guild.members.cache.filter(m =>
        m.roles.cache.has(process.env.rolebot)
        ).size
    setInterval(() => {
        const channel = guild.channels.cache.get(process.env.chntotbot);
        channel.setName(`🤖 ${count.toLocaleString()}`);
        // message.channel.send(`"dj : " + ${count}`);
        console.log('Updating TotBotCount');
    }, 300000); // 5 minute 
}