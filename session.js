//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUgyTVkrSkFIaUIzUmN1YU1xWXpmejBWcmxnRjhveG84VHJFdGdTSFNGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1U1T0lucjFOS2QwM1FSbkpEQVhrdXVkL0tGQmtGUTYzWFgzTmVCTnNtbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTm1TWmtXRmRNODFpMWpvb2F2YTdtZmFpWlBzSDR0VUdrcmg2QjJJTFVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWRlRBdEwveWJmbUJyT3ZaUTVJRlpzSndTKzh5NGZ0VkpyQnZVN1k0cmhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMWVNTckdoU21MazJuUUVnN005VHdURzBsYXE2KzEwc3JMUWM5WTkvMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEdHBTbGVGV1M3di82alZ3TkE3Z2ZaUndoY09wYlJIcjRnU2NBaklNSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5pc1ZhYS9WY055cU5NOXVPR1hKVjBIYlh4T1Z5aHlQZGtheUdJdUpIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2ovM3pMZVhMN2pCWnlPTmNvWk9jSkFuWElORXF6WmRjM0FwKzQ3ekJSWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxzUUY5eSs3UTFtQTkwU0xaOHNaL0NRTkRrUlcvQ0p2ckZINWd2c3lQdjZXY2NrTGFBUW1kK0Z2M2tiUTQxenJ2VmJ3dlozRThSTTJEa2ZrV1ljekJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJKbUZtMjJPMDcyMzB4d0lacXBNVnFEQThvdTBoUnRVL1FLd2NmSG5LT0hzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGTjZ6Vld4SVQzMlJpY2M1aE1XQTVBIiwicGhvbmVJZCI6IjdiNTExM2ZmLTgzYzMtNGYwZi1iZTk0LThkODI2YThhNmVhNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIya3hOVkpzYXlNNExKOCtycVNEbjBSamE5bVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2JtVzA4enI3d0FlNVJSaW1xTTNzRGtmemMwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVEQjZYTUs0IiwibWUiOnsiaWQiOiI5NDc4NDMzMTE4MDoyNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4OTY1MzQ5MTY1ODk5NDoyNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00rbmo4VURFTzMrcThJR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikg2SDd6blNOYWNESXdFdDk1T1EwUGExbEttZGRxSVpvaGo5dldURXNVajQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im4xRENCR3ozZWcvU0tTOElERXRRR0hXL2pMSWgwK293MjlrcFhleE5Ga2NybUF5OHM3cEJEeE0xalV4cjBKSDlmWG1QbHN0S3ZZZGxMbjhMMXJOb0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQMXJITzR6a2toemY0VlMvL0ZPTFZOWVZvc2xiNzd1QWJGNGVUZTVnWllFNi84Zm1aSUtKaTV1SlBqM1hRWGxyRk1HU0s0SW5oNDFSQTJYR2F0TFNCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg0MzMxMTgwOjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlIraCs4NTBqV25BeU1CTGZlVGtORDJ0WlNwblhhaUdhSVkvYjFreExGSSsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTc0NTUzMCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCRUoifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94784331180",
  PASSWORD: 
    process.env.PASSWORD || "sasilu",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
