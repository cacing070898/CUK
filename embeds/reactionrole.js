const Discord = require('discord.js')
module.exports = {
	async run(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
    .setColor('#e42643')
            .setTitle('Pick that Role !!!')
            .setDescription('If you confusing just hit that Emoji, thats will give you CUK access.\n')
    message.channel.send(embed);
	 }
	}
module.exports.embedConfig = {
    embedName: "rrrr",
    embedAKA: [""]
}