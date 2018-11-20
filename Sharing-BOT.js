const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === '421304014928609291') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`نقدم لك دعوة لسموك الراقي:rose: لتحظي بجمال حضورك وتواجدك:heart_eyes: اي مشكلة تواجهك ولا يهمك,عندك الادارة تفضل ونحل مشكلتك:blue_heart::heart: واخيرا حياااك :wink: شرفنا يا عسل:

  تكفا لا تردني:revolving_hearts::fire:
  *
  
  https://discord.gg/5JbxHCn
  plz enter 
  ):`,`حرام جميل مثلك م يكون بسيرفرنا :heart::blue_heart: https://discord.gg/5JbxHCn`,`مِن بَاب الصِدف الجَميلة،تعَال يمّكن تكون جَيتك
  ..
   لنا اليُوم صِدفة حلوةُ ونتعرفّ عَليك فِيها. :heart::blue_heart: https://discord.gg/5JbxHCn`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.login('NDMxMTMyNjkwODI2MjY0NTc4.Dkbzlw.qLwVAccmghWxjnE2rAawP0z0CbA');
