// const { format } = require("date-and-time");
// const { utc } = require("moment");
require("dotenv").config();
module.exports = async (client) =>{
    const guild = client.guilds.cache.get(process.env.guild);
    setInterval(() =>{
     
        let ts = Date.now();
        let date_ob = new Date(ts - 1);
        let day = date_ob.getDay();
        let dayNames = [
            "Sunday","Monday","Tuesday","Wednesday",
            "Thursday","Friday","Saturday"
            
        ]
        let dayName = dayNames[day];
        let date = date_ob.getDate();
        let dateNames = [
            "31st","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th",
            "11th","12th","13th","14th","15th","16th","17th","18th","19th","20th",
            "21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th"
        ]
        let dateName = dateNames[date];
        let month = date_ob.getMonth();
        let monthNames = [
            "Jan","Feb","Mar","Apr",
            "May","Jun","Jul","Aug",
            "Sep", "Oct","Nov","Dec"
        ];
        let monthName = monthNames[month];

       

        const calender = "📅 "+dayName +","+monthName +" "+ dateName;
     

        const channeldate = guild.channels.cache.get(process.env.chndate);
    
        channeldate.setName(`${calender}`);
     
        console.log('Updating Date');

    }, 43200000); // 12 hours 
}
