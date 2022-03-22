let handler = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `Send a broadcast message to ${groups.length} group\nEstimasi Complete ${groups.length * 1.5} detik`, m)
  for (let id of groups) {
    await conn.delay(1500)
    await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '「 *Naruto Broadcast* 」\n\n' + teks + '\n\n© Naruto By Rafi Ser'), true).catch(_ => _)
  }
  m.reply('*Broadcast Finished*')
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

module.exports = handler 
