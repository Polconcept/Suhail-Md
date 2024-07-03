const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121807613";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_01_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICA1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDk0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDg2LFxuICAgICAgICAzLFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMxLFxuICAgICAgICA3NSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY1LFxuICAgICAgICAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlg0Y2VSSzkrT0RiVk9pZnlxTlBzNmhwRVJmSHZOYlZWM2pXeWV4MU5yQW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyMTgwNzYxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTE1QjU2QTlCNTBGRjdERjg1OTI0MjYyMUU5Q0MxOEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDE4ODkzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJCMm5hRGZsUnA2S3JKNDFvYUlLMUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTFmZTQxZDItZTZkOS00ZTZkLWE2YmUtYzk0YjJhNWM2MDIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDE0OCxcbiAgICAgIDg0LFxuICAgICAgMTg2LFxuICAgICAgMjI4LFxuICAgICAgMjEyLFxuICAgICAgMjI2LFxuICAgICAgOTQsXG4gICAgICAyMzIsXG4gICAgICA1OSxcbiAgICAgIDk5LFxuICAgICAgMTQ2LFxuICAgICAgMjE0LFxuICAgICAgMTAyLFxuICAgICAgMTA1LFxuICAgICAgMjExLFxuICAgICAgMjM2LFxuICAgICAgMjE2LFxuICAgICAgMjEwLFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDE1NSxcbiAgICAgIDE4MCxcbiAgICAgIDIxMyxcbiAgICAgIDI0NyxcbiAgICAgIDE5NyxcbiAgICAgIDIzOCxcbiAgICAgIDE2NSxcbiAgICAgIDEzMyxcbiAgICAgIDM1LFxuICAgICAgMjE4LFxuICAgICAgMTQ5LFxuICAgICAgODYsXG4gICAgICAyMjgsXG4gICAgICAxNixcbiAgICAgIDE1OSxcbiAgICAgIDU4LFxuICAgICAgNDEsXG4gICAgICAyMzcsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkZFS0ozRVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjE4MDc2MTM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk0MDcyNzY5NDA1MTI1OjE1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlN3ZWVjaGV6IE1lZGlhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlBrOWZzQkVNZlBsYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwVzQwNTB0TFJFZTl0V3lTSzBVU0hEL3NVT2E1dWxuM1g0STlRckZOd0Q4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNlUlErRUJjMStFMlNaM09VdkVYalI1aUlNQlZFWXdLQ0NqMVRNeDR5b24vYlpGTWRkMUk2T0NrWDNyd3pwMk0zVDlVOEYvM1JrVk95Y0tyV29qdENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlHSGlFcjhYaEljMUtyaXBsUHU1Ri82MzVKM2NtVE9GbkRvT2d5ZXV2R0lwMStxeEhuZ3lncW56MzRFaGQzanJLcDkrdWVseHhDL0ZBek1qNDJnQ2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjE4MDc2MTM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDE4ODkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjYvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNi8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
