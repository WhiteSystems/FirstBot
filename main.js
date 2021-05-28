console.log('loading...')
const Discord = require('discord.js');
const fs = require('fs');
const config = require("./config.json");
const client = new Discord.Client()

client.on("message", function(message) {
    if (message.author.bot) return;
  });
  
  
  client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(config['prefix'])) return;

    const commandBody = message.content.slice((config['prefix']).length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    const content = message.content;
    const roles = client.guilds.cache.map(guild => guild.roles.cache.size);
    let header1 = args[0];
    let header2 = args[1];
    let news3 = args[2];
    let news4 = args[3];
    let news5 = args[4];

        if (command === "news" && message.member.roles.cache.some(role => role.name === config['role'])) {
        client.channels.cache.get(config['news']).send({embed: {
            color: 11027200,
            author: {
              name: header1,
              icon_url: 'https://i.ibb.co/hBm6ZX0/White.png'
            },
            thumbnail: {
                url: 'https://i.ibb.co/hBm6ZX0/White.png'
            },
            fields: [{
                name: header2,
                value: news3
              },
              {
                name: "Betrifft",
                value: news4
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL(),
              text: "© WhiteSystems"
            }
        }
        });
        
            
        console.log(message.content)
     } else if (command === "vorlage" && message.member.roles.cache.some(role => role.name === config['role'])) {
        message.channel.send('```.news Überschrift Überschrift2 text @Betrifft```');
        message.channel.send({embed: {
          color: 11027200,
          author: {
            name: "Überschrift"
          },
          fields: [{
              name: "Überschrift2",
              value: "text"
            },
            {
              name: "Betrifft",
              value: "@Betrifft"
            },
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL(),
            text: "© WhiteSystems"
          }  
      }
      }); 
    }
    }); 

client.login(config['token'])
console.log('Ready!')

