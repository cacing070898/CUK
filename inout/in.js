require("dotenv").config();
module.exports = async (client) =>{
    client.on('guildMemberAdd', guildMember =>{
        guildMember.guild.channels.cache.get(process.env.chnin).send(`Hai <@${guildMember.user.id}> Selamat datang ! jangan lupa say hai sama member lain!`)
    });
}