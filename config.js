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
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=700&scaleHeight=400&fontsize=90&fillTextType=2&fillTextPattern=Warning!&fillColor1Color=%23f2aa5g&fillColor2Color=%23f2aa5g&fillColor3Color=%23f2aa5g&fillColor4Color=%23f2aa5g&fillColor5Color=%23f2aa5g&fillColor6Color=%23f2aa5g&fillColor7Color=%23f2aa5g&fillColor8Color=%23f2aa5g&fillColor9Color=%23f2aa5g&fillColor10Color=%23f2aa5g&fillOutlineColor=%23f2aa5g&fillOutline2Color=%23f2aa5g&backgroundColor=%23101450&text='

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
