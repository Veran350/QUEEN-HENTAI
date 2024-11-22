//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Verantechhub@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Veran350/QUEEN-HENTAI";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajIDgjDZ4LVnxfB1Z2s";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajIDgjDZ4LVnxfB1Z2s";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/p1ryaj.jpg";
global.devs = "2347082664317";
global.sudo = process.env.SUDO || "2347082664317";
global.owner = process.env.OWNER_NUMBER || "2347082664317";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/p1ryaj.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09RTk9RcC9uMWZOT2UzT0Z0ZWE1M3N1Nm1HNzRwNTBROUFmcFkvRFhuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNndoUHErQjhnYklqMngrRmV0Tk5OdzBZakNWZUFuczZVWndpaU55WEFsND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSU1ZNGpDSkdUQTd3b0FpalRtcEJZR3dqV1pzbzNjdkFrcTBjOW5pUVg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJucFNub0t6NzNIL0l4TVVLaXlobHhERlV1aVp1cy91blFaMjhPOVprWTM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlFSDJ1aXkvK3hoSk9iNFZ2NDBuRUg2NmllNzJJZVFnUW1SUWk5bFJ3R1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhXN2FncmZaKzhPWGJvRkhWczBKYVNONCtXQTRldmZXUTJzSGJuaVNQMjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBmWFN5ZGkzU1RjUHZjTXdzRnJGeXkwUXJqVWlTTFMxaUIzRVFwVENFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmdINjBwU2QrNldFZDU0bUJaY2pEYzZwakEwS3J6bUQzeGdhVjNsZmJYbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKNCtsSFljUHBCNHU1K1EwaXJjMVR0Qm1EWHRSL3ZkS0VWNktITUhEd093a1pXNXE1MWVDN24yL3BUUEZDcXE1TzV2UkdMSzRLK285WTlQLzN0a0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6Im1tNDFPU3JsUHhRczFmb2t6dFBYc2ZoQ0krYkFMem1IQmNhWUdGaXdWcTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhBb2E3aEFvU3NLakxISmdraFpVVnciLCJwaG9uZUlkIjoiOTRlNmFkOTktZDE5MS00ODcxLTk3MjItNDg0NGM1OWE3ZTU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJObUxjNVFHLzErWFhINnhkcHRpUlNFcVQzMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0Y2diWXFWTGRVV0VRdnBrbkZQbENaT1V1UUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOU5GMlo2UzciLCJtZSI6eyJpZCI6IjIzNDgwMzg5NTA5Mzc6MjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0kySGdNUUdFTm5LZ2JvR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijd5QWNBbmFmSHN3Zm1IazZ1WHVnN0E3a1lVY3RxWWlBdWVwUTdPS3E1U2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhNRUNPV2ZVaVBpOGpKdGo2cUk5MExkaVZTWXE1K0NRT1lXN291RlplZEhOUFBsS2MwTXgvdk5PVWxBT3p4Z2xybVVoTmMvek53N1N0cERLRUJqM0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIranBDUEMvbzJ2TnZiZHlnODdDcW1SdFA4ZXRPY2RYVGhHN3ZLeEt2cjkwaHp2TDBkV0VSMjk0OG5obU83cG1kQkRoSTlDSXZ5WDNXL3BGcDJ5WGxCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMzg5NTA5Mzc6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZThnSEFKMm54N01INWg1T3JsN29Pd081R0ZITGFtSWdMbnFVT3ppcXVVbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjI3MzUxMn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_HENTAI™`",
  author: process.env.PACK_AUTHER || "VERAN",
  packname: process.env.PACK_NAME || "VERAN-TECH-HUB ",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_HENTAI`",
  ownername: process.env.OWNER_NAME || "VERAN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
