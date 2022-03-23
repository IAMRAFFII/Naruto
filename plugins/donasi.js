let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'Donation', `
┌「 *Donation • Emoney* 」
├ 
├ 
└────
`.trim(), '© Naruto By Rafi Ser', 'Donation', '.donation', m)
handler.help = ['donation']
handler.tags = ['info']
handler.command = /^dona(tion|donate)$/i

module.exports = handler
