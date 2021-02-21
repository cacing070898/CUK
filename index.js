require("dotenv").config();
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({partials: ['MESSAGE', "CHANNEL", "REACTION"]});
const totmem = require("./stats/totmem");
const onmem = require("./stats/onmem");
const totbot = require("./stats/totbot");
const cntdate = require("./stats/cntdate");
const cnttime = require("./stats/cnttime");
const guildMemberAdd = require('./inout/in');
const guildMemberRemove = require('./inout/out');
client.login(process.env.token)
client.once('ready', () => {
    console.log(`${client.user.tag} on !!!`);
    totmem(client);
    onmem(client);
    totbot(client);
    cntdate(client);
    cnttime(client);
    guildMemberAdd(client);
    guildMemberRemove(client);
})

// [[  ALAT  ]] //
client.alat = new Discord.Collection();
client.alatAKA = new Discord.Collection();
fs.readdir("./alat/", (e, f) => {
    if(e) return console.error(e);
    f.forEach(file => {
        if(!file.endsWith(".js")) return
        console.log(`${file} has been loaded`)
        let cmd = require(`./alat/${file}`);
        let cmdName = cmd.alatConfig.alatName;
        client.alat.set(cmdName, cmd)
        cmd.alatConfig.alatAKA.forEach(alias => {
            client.alatAKA.set(alias, cmdName);
        })
    })
})
client.on("message", async(message) => {
    const prefix = process.env.prefix
    if(!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandAlat = args.shift().toLowerCase();
    const cmd = client.alat.get(commandAlat) || client.alat.get(client.alatAKA.get(commandAlat));
    if(!cmd) return
    try {
        cmd.run(client, message, args, Discord);
    }catch (err){
        return console.error(err)
    }
})
// [[  ALAT  ]] //

// [[  EMBEDS  ]] //
client.embeds = new Discord.Collection();
client.embedAKA = new Discord.Collection();
fs.readdir("./embeds/", (e, f) => {
    if(e) return console.error(e);
    f.forEach(file => {
        if(!file.endsWith(".js")) return
        console.log(`${file} has been loaded`)
        let cmd = require(`./embeds/${file}`);
        let cmdName = cmd.embedConfig.embedName;
        client.embeds.set(cmdName, cmd)
        cmd.embedConfig.embedAKA.forEach(alias => {
            client.embedAKA.set(alias, cmdName);
        })
    })
})
client.on("message", async (message) => {
    const prefix = process.env.prefix
    if(!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandEmbeds = args.shift().toLowerCase();
    const cmd = client.embeds.get(commandEmbeds) || client.embeds.get(client.embedAKA.get(commandEmbeds));
    if(!cmd) return
    try {
        cmd.run(client, message, args, Discord);
    }catch (err){
        return console.error(err)
    }       
})
// [[  EMBEDS  ]] //