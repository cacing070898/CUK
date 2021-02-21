module.exports = {
    async run(client, message, args) {
        if(!args[0]) return message.reply("Masukin jumlah pesan yang akan di hapus!");
        if(isNaN(args[0])) return message.reply("Masukin angka saja!");

        if(args[0] > 100) return message.reply("Maaf tidak bisa lebih dari 100 pesan!");
        if(args[0] <1)return message.reply("Hapus setidaknya 1 pesan!");
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}
module.exports.alatConfig = {
    alatName: "hapuspesan",
    alatAKA: ["hp"]
}