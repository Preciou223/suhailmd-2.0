const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_57_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIwLFxuICAgICAgICA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk0LFxuICAgICAgICA2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDIzLFxuICAgICAgICA4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI5LFxuICAgICAgICA5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdEcUxZdjBNTnBodFFkSkkzalVaWnRLUk9mTW1KNmN3ajFVNkkrNGNIY3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzOTY1NzY0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FGRjI3QUJERjg5REE0QjdCQjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MTA1NDM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzOTY1NzY0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FBMTAwRjc4OEQ3M0FFM0U1Q0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MTA1NDQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzOTY1NzY0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E2RkU0QkMzQ0MwQjZDMjM0NzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MTA1NDQzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJwd2FQSjl6UkE2LWVRUVpGdGNtUUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWU4MjAyMjUtOWIxMS00ODA0LThiYWYtZmFkODQ0YmUxNGU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgNDcsXG4gICAgICAyNDgsXG4gICAgICA0OSxcbiAgICAgIDI1MCxcbiAgICAgIDE0MCxcbiAgICAgIDI1MSxcbiAgICAgIDIwNyxcbiAgICAgIDI0OCxcbiAgICAgIDEyNCxcbiAgICAgIDg5LFxuICAgICAgMTAsXG4gICAgICAyMzUsXG4gICAgICAyMyxcbiAgICAgIDE1NSxcbiAgICAgIDE3NSxcbiAgICAgIDE4OSxcbiAgICAgIDE1NixcbiAgICAgIDIxLFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICAyMTAsXG4gICAgICAxMzAsXG4gICAgICA0OSxcbiAgICAgIDIzMSxcbiAgICAgIDE5OCxcbiAgICAgIDEzNCxcbiAgICAgIDExNSxcbiAgICAgIDE5MyxcbiAgICAgIDIwMCxcbiAgICAgIDE2NixcbiAgICAgIDMwLFxuICAgICAgMjAyLFxuICAgICAgMjAxLFxuICAgICAgOTcsXG4gICAgICAyMTMsXG4gICAgICA4OSxcbiAgICAgIDE2NSxcbiAgICAgIDEzLFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdGUUtSRjkxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM5NjU3NjQ5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MzkxMzk5ODU2OTYyMTo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkx1aXMgQ29sb25cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUEVvOThMRU5xeThib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktqaWFYNWJIMTYxazV2ZytBY3lUSlNLN00veThpd0lhOFFyaVJDZUNkMlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV3JMM2hLY2grc0duMFpEZzM4VGxlZElYRnhGUUpHY0ZXbDBCUGdHUk96dVRMV2Z2S1NCb1NTVHBGaitQcmxtdFNVWG1kL1QrR2pjZG0xL0tiWjVrQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYllIdkpJblpoaGdOdElSNjErQmEyY3cvcGQ0UG44QVFtZlhORjlwNEV2MmhaOHBHa0dVR21nUE5yRlk3RWNFMzFOdGZmOHBVRC9KRzZoZkxqcmo0aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzOTY1NzY0OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxMDU0MzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLSUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtJRy5qc29uIjogIntcImtleURhdGFcIjpcIlhYUjdheU4zcU9KbzVXR2N1Tk14Kzk3OGRlSXRYL3VlM21iSHo4c0JVN3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzE1MjYwMTY2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzM0MTA1NDM3NjEzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
