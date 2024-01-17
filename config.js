const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "2349120986822"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="marvelousj883@gmail.com"
global.location="Benin,Edo,Nigeria"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23491320986822";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "Jolter MD" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Jolter MD",
  packname: process.env.PACK_NAME || "♥Kun",
  botname : process.env.BOT_NAME  || "JOLTER ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Marvelous",


  sessionName:process.env.SESSION_ID|| "",  // SESSION_11_38_01_17_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pqbnNvbnh6OCtoL1JsTzkvMXZIUUtGUkVqNk16eVVWV3Y2a2ZZWldWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXo4THgrRmU3c3VLNGRpVlVtN0wxWnZENHo4b0pqYStNUDY3SnJ6dEJ4TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRlZDdnpMQzlrU2hzQkNrbVFRaGdqWEtQSFp0TE56dnF3V1FOWWs2N1Y4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5OUk1dG1tazU2eEk3YklSNUFQRG85Y29vcXR0S21IWTBjeHptSkVZclE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9HY05sbENHZ3hqTVkzamZtV3VDUmlEQjFwUXZ2cjF5bWZWczBObnFrbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHT0hNdC83T3lQNDdydzI5dkVqMjVJUllsSkNnd1JVS2wrOVFuZDNkelU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkplRU5HcVBXVkhQY1BJUVVVZTQ1bHkvYlFRaTlXQmlZbFNXVXl5eEtIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUlsZnRpMVExdUc2Z3hVUFJGUVA1MFdyS0srNGxER1VBV1RydmROWmFTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ingwamd3UG9oZjVRcGF0SEtuN0plYlJRRTR5SnNHakxsNnpRTXllNlBQVG54VUlXMU5KNTZETjh5L1dMR3I0VDZhRHZFTlBZemh2RC9QdVRySUpOWWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJnUGQ2RlM5OTRMekpDTTNIQXM3TUdHVGloeURYS1VVaGlIMjl3UFRwU3k4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiMDVoai1SWVRsbTluaXdPM01mTzVnIiwicGhvbmVJZCI6IjA0NjgxNWU1LWZhNWItNGM4Yi1iNmY1LWRlOWE2M2EyYmU3YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHZk43ZVY4cVIrWjgybnE2V2hiMjM1dzVpYlk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBvNHVwYitaazU1TURPQm5GaUZpSlVGb1lZMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0syUnIvc0NFTEg0bnEwR0dCRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjE1MDcwZysrQzNmTndobDR1UzQwT2VJR1J0bURRSS9LVEZaaVZDbGJEREk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNhTlN2Tk5LaVV2T0tPNncreGVkMVA4Z05xQjdmMnQ0YnJ5UXBKZmtVcjl2R3lBalhiWnE3RlRzYlhBY0ZObGNMcVRMT1ltYmhRNTQzRjFTT3lEQkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0cFJ3V0ZjZ2I5MEs1dWpqZ3AxLzlzaUNoOTlGV3BGbERvUmNxeDZNWlJuZmNmQnFyYXMxNlI4a1RtUDdYeVM0RVplSEFHMlRXMkZsQzlRQ3AxckVnZz09In0sIm1lIjp7ImlkIjoiMjM0OTEyMDk4NjgyMjozOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTb2Z0IEJyZWFzdPCfjZIifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyMDk4NjgyMjozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkZWRPOUlQdmd0M3pjSVplTGt1TkRuaUJrYlpnMENQeWt4V1lsUXBXd3d5In19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDU0OTE1MTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXRHIn0=
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "text",  // https://telegra.ph/file/99504bf508c73b8e8630f.jpg
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "JOLTER",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
