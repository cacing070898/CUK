const Discord = require('discord.js')
module.exports = {
	async run(client, message, args, Discord) {
    let embed = new Discord.MessageEmbed()
    .setColor('#1E90FF')
    .setTitle('.Rules of Server.')
    .setDescription('Pahami Dulu ya...')
    .addFields (
        {name : 'Rules 1 : ', 
        value:`❆ Be friendly and nice to each other! \n`
            + `- Baek baek sama yang lain ^^`}, 
        {name : 'Rules 2 : ', 
        value:`❆ Do not be racist or promote any other form of discrimination!! \n`
            + `- Jangan ada SARA atau diskriminasi!! `}, 
        {name : 'Rules 3 : ', 
        value:`❆ Do not use harsh words or words that could hurt another person's feelings. Don't use explicit words intentionally. Be kind and watch your words.  \n`
            + `- Jangan pakai kata-kata kasar atau kata yang dapat menyinggung lawan bicara. Jangan sengaja gunakan kata-kata eksplisit. Perhatikan kata-kata kalian dan pastikan itu kata-kata yang baik.
            `}, 
        {name : 'Rules 4 : ', 
            value:`❆ If you're bothered by the notification, feel free to mute the channel/entire server.\n`
                + `- Kalau notifnya terlalu berisik, boleh dimute channel/servernya.\n\n`}, 
    )
    .setFooter('note : \n' 
	       + 'Dont forget to Be Nice');
    message.channel.send(embed);
	 }
	}
module.exports.embedConfig = {
    embedName: "rules",
    embedAKA: [""]
}