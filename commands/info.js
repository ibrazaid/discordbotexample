module.exports = {
    name: 'info',
    description: "This is info command!",
    execute(message, args){
        message.channel.send('This server was build on June by IBOT!')
    }

}