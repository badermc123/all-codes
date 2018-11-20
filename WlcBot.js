const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT ONLINE");
const lol =
[
'**Wellcome To Stability:notes::notes:...**',
'**Wellcome To Stability:notes::notes:...**',
'**welcome to Stability SERVER.. :wilted_rose::black_heart:**',
'**welcome to Stability SERVER.. :wilted_rose::black_heart:**',
'**Bienvenue à Stability :zzz::musical_keyboard:**',
'**Bienvenue à Stability :zzz::musical_keyboard:**',
'**Welcome To Stability  :heart:**',
'**Welcome To Stability  :heart:**',
'**Welcome To Stability...:frowning: :heart: **',
'**Welcome To Stability...:frowning: :heart: **',
'**welcome to Stability SERVER.. :wilted_rose::black_heart:**',
'***Wellcome To Stability:notes::notes:...**',
'**Welcome To Stability  :heart:**',
'**welcome to Stability SERVER.. :wilted_rose::black_heart:**'
]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("482163085809942529");
if(!codes) return;
if(codes) {
    setTimeout(() => codes.send(`${lol[Math.floor(Math.random() * lol.length)]} ${member}`), 3000)       
}
});
client.login('mfa.Rmvvou2R66yFSeCkr5-YHTJlc3tMIEr_lpzRJPZS1mGM1FyuyZU0_CM4WM-vwWtT3M63x-hnVrqVdOdQEo30');
