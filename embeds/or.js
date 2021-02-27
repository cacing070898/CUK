const Discord = require('discord.js')
module.exports = {
	async run(client, message, args, Discord) {
    const game = '🎮'
    const emojiPC = '🖥️'
    const emojiSmartphone = '📱'
    const emojiConsole = '🎮'
    let embed = new Discord.MessageEmbed()
            .setTitle(`Let me know what your gamer ${game} tag is`)
            .setDescription(
            `${emojiPC} = PC\n`
            + `${emojiSmartphone} = Smartphone\n`
            + `${emojiConsole} = Console\n`
            )
            .setColor('#1E90FF')
    message.channel.send(embed);
	 }
    }
module.exports.embedConfig = {
    embedName: "or",
    embedAKA: [""]
}