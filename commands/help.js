module.exports = {
    name: 'help',
    description: "This is help command!",
    execute(message, args){
        message.channel.send('```!botping: Untuk menghetahui ping anda!```')
        message.channel.send('```!botinfo: Untuk menghetahui info server ini!```')
        message.channel.send('```!botauthor: Untuk menghetahui pembuat saya!```')
        message.channel.send('```!bothallo: Untuk menyapa saya!```')
        message.channel.send('```!bothelp: Untuk meminta bantuan!```')
    }

}