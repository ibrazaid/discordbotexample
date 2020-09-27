const Discord = require ('discord.js');

const client = new Discord.Client ();

const prefix = '!bot';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require (`./commands/${file}`);

    client.commands.set(command.name, command);
}



   client.once('ready', () => {
       console.log('Ibot is online!');
   });

   client.on('message', message =>{
       if(!message.content.startsWith(prefix) || message.author.bot) return;

       const args = message.content.slice(prefix.length).split(/ +/);
       const command = args.shift().toLowerCase();

       if(command === 'ping'){
           client.commands.get('ping').execute(message, args);

       } else if (command == 'youtube'){
           client.commands.get('youtube').execute(message, args);

       } else if (command == 'hallo'){
           client.commands.get('hallo').execute(message, args);

       } else if (command == 'author'){
           client.commands.get('author').execute(message, args);

       } else if (command == 'help'){
           client.commands.get('help').execute(message, args);

       } else if (command == 'info'){
           client.commands.get('info').execute(message, args);

       } else if (command == 'instagram'){
           client.commands.get('instagram').execute(message, args);
       }


 });
   
    
 client.login('NzU5MDU0NzIxOTM0OTUwNDMw.X236zA.VULazqaruIJtoUtCkxPgyXrBigo')