// const { format } = require("date-and-time");
// const { utc } = require("moment");
require("dotenv").config();
module.exports = async (client) =>{
    const guild = client.guilds.cache.get(process.env.guild);
    setInterval(() =>{
     
        
        let ts = Date.now();
        let date_ob = new Date(ts);
        let hour = date_ob.getHours();
        let minute = date_ob.getMinutes();

        const jam = "🕐 "+hour+":"+minute;

        const channeltime = guild.channels.cache.get(process.env.chntime);
        channeltime.setName(`${jam}`);
        console.log('Updating Time');

    }, 30000); // 1 minute 
}