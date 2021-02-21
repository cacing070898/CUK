const Discord = require("discord.js")
module.exports = {
    async run(client, message, args, Discord){
    let embed = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setTitle('The new music command for Cuk  has Coming !!! ')
    .setDescription('CUK Commands\n\n'
        + `Support Commands\n\n`
        + `info / tolong                = Command Info\n`
        + `ping / pg                    = Bot Stat\n\n`
        + `Funny Stuf\n\n`
        + `hello / hi / hey / yo        = Bot will answer Hello!!!\n\n`
        + `Admin Commands\n\n`
        + `ban / banned                 = Ban user\n`
        + `kick / kickmember / km       = Kick user\n`
        + `hapuspesan / hp              = Remove messages\n`
        + `mute / m / mt                = Mute user\n`
        + `unmute / unm / unmt          = UnMute user\n\n\n`
        + `auth : Ahmad Afta a.K.a CACING\n\n`)
        .setFooter('Dont forget to Be Nice');   
        message.channel.send({ embed })
    }
}
module.exports.embedConfig = {
    embedName: "info",
    embedAKA: ["tolong"]
}