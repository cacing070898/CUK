require("dotenv").config();
module.exports = async (client) =>{
    client.on('guildMemberRemove', guildMember =>{
        guildMember.guild.channels.cache.get(process.env.chnout).send(`Si <@${guildMember.user.id}> Minggat !!!`)
    });
}