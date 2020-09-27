module.exports = {
    name: 'hallo',
    description: "This is hello command!",
    execute(message, args){
        message.channel.send('Hallo There!')
    }

}