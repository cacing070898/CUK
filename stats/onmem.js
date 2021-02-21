require("dotenv").config();
module.exports = async (client,) => {
  const guild = client.guilds.cache.get(process.env.guild)
  const on = guild.members.cache.filter(m =>m.roles.cache.has(process.env.rolemember) &&m.presence.status === 'online').size
  const idle = guild.members.cache.filter(m =>m.roles.cache.has(process.env.rolemember) &&m.presence.status === 'idle').size
  const dnd = guild.members.cache.filter(m =>m.roles.cache.has(process.env.rolemember) &&m.presence.status === 'dnd').size
      setInterval(() => {
          const channel = guild.channels.cache.get(process.env.chnonmem);
          channel.setName(`🟢${on.toLocaleString()}`+`⛔${dnd.toLocaleString()}`+`🌙${idle.toLocaleString()}`);
          // message.channel.send(`"dj : " + ${count}`);
          console.log('Updating online Members');
      }, 300000); // 10 seconds 
}