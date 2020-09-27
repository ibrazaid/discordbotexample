module.exports = {
    name: 'ping',
    description: "Ini adalah ping command!",
    execute(message, args) {
       message.channel.send('finding bots ping...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`Your ping is ${ping}ms`)
                    
       })
    }
}