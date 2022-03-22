let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'Donation', `
┌「 *Donation • Emoney* 」
├ https://saweria.co/ariffb
├ https://trakteer.id/ariffb/tip
└────
`.trim(), '© Naruto By Rafi Ser', 'Donation', '.donation', m)
handler.help = ['donnation']
handler.tags = ['info']
handler.command = /^dona(ti|on)$/i

module.exports = handler
