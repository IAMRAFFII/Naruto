let fs = require('fs')
let chalk = require('chalk')

global.owner = ['919605741366', '918921240132'] // Letakan nomor kamu disini

global.APIs = { // API Prefix
  // nama: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://api.reysekha.my.id',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  waifupics: 'https://api.waifu.pics',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://melcanz.com': 'trial',
  'https://api.reysekha.my.id': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto.xyz': 'hardianto',
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.chipa.xyz': 'pais',
  'https://api.xteam.xyz': 'apikeymu',
  'https://api.zeks.me': 'apivinz',
}

// Sticker WM
global.packname = 'ɴᴀʀᴜᴛᴏ🥵'
global.author = 'ʀᴀғɪ sᴇʀ🍭'

global.wm = '© Naruto By Rafi Ser'
global.wait = '_*wait for processing...*_'
global.eror = '_*Server Error Try .song <link>*_'
global.benar = '✅'
global.salah = '❌'
global.dikit = 'a little more'
global.fla = 'https://i.imgur.com/sluCLer.jpg'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
