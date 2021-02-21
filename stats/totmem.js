require("dotenv").config();
module.exports = async (client) =>{
    const guild = client.guilds.cache.get(process.env.guild);
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(process.env.chntotmem);
        channel.setName(`😈 Cuk : ${memberCount.toLocaleString()}`);
        console.log('Updating TotMemberCount');
    }, 300000); // 5 minute 
} 