const Discord = require('discord.js')
module.exports = {
	async run(client, message, args, Discord) {
    const game = '🎮'
    const emojiFPS = '🎯'
    const emojiSurvival = '⛏️'
    const emojiIndie = '🌴'
    const emojiAction = '🗡️'
    const emojiAdventure = '🏕️'
    const emojiCasual = '👞'
    const emojiSimulation = '🔗'
    const emojiStrategy = '🗺️'
    const emojiSports = '⚽'
    const emojiRPG = '⚔️'
    const emojiRacing = '🏁'
    const emojiPuzzle = '🧩'
    const emojiGore = '☠️'
    const emojiHoror = '👻'
    const emojiArcade = '🕹️'
    const emojiRetro = '🎲'
    const emojiCrafting = '⚒️'
    let embed = new Discord.MessageEmbed()
            .setTitle(`Let me know what your gamer ${game} tag is`)
            .setDescription(
            `${emojiFPS} = FPS\n`
            + `${emojiSurvival} = Survival\n`
            + `${emojiIndie} = Indie\n`
            + `${emojiAction} = Action\n`
            + `${emojiAdventure} = Adventure\n`
            + `${emojiCasual} = Casual\n`
            + `${emojiSimulation} = Simulation\n`
            + `${emojiStrategy} = Strategy\n`
            + `${emojiSports} = Sports\n`
            + `${emojiRPG} = RPG\n`
            + `${emojiRacing} = Racing\n`
            + `${emojiPuzzle} = Puzzle\n`
            + `${emojiGore} = Gore\n`
            + `${emojiHoror} = Horor\n`
            + `${emojiArcade} = Arcade\n`
            + `${emojiRetro} = Retro\n`
            + `${emojiCrafting} = Crafting\n`
            )
            .setColor('#e42643')
    message.channel.send(embed);
	 }
    }
module.exports.embedConfig = {
    embedName: "gametag",
    embedAKA: [""]
}