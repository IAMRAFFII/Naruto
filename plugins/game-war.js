/*//////////////////////////////////

Cretor : Hairul Lana
https://github.com/hairullana 

/*////////////////////////////////*/

let handler = async (m, { conn, usedPrefix, args, command }) => {
  conn.war = conn.war ? conn.war : {}
  conn.war2 = conn.war2 ? conn.war2 : {}

  if (!args[0] || args[0] == "help") return m.reply(`*❏  W A R - Z O N E*

[1] War Zone is a war game with a turn attack system or take turns
[2] The game can start with 1v1 up to 5v5
[3] War capital is the spoils of war if your team wins
[4] Each player will get 5000 HP (Health Point)
[5] The success of the attack depends on your level with the level of the enemy to be attacked
[6] Attack chance is 40 seconds, more than that is considered AFK (2500 HP reduction)
[7] A team will win if the opposing team loses all (HP <= 0) and gets the spoils of war

*❏  C O M M A N D S*
*${usedPrefix + command} join A/B* = join game
*${usedPrefix + command} left* = left game
*${usedPrefix + command} money 10xx* = bet money
*${usedPrefix + command} player* = player game
*${usedPrefix + command} start* = start game`)


  if (args[0] == "money"){
    if (!(m.chat in conn.war)) return m.reply(`*Please create a room first (Type .war join)*`)
    if(m.sender == conn.war[m.chat][0].user){
      if (args[1] != "undefined" && !isNaN(Number(args[1]))){
        args[1] = Number(args[1])
        if (args[1] < 1000000) return m.reply('*Minimum Rp. 1.000.000*')
        conn.war2[m.chat].money = args[1]
        return m.reply("*Successfully set a war capital of Rp. " + Number(args[1]).toLocaleString() + "*")
      }else {
        return m.reply("*Enter the war bet capital in the form of numbers (may use dots)*\n\n.war money 100.000.000")
      }
    }else {
      return conn.reply(m.chat,`*Only @${conn.war[m.chat][0].user.split('@')[0]} as a room maker that can replace the initial capital of war*`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
    }
  }

  // JOIN
  if (args[0] == "join"){
    
    if (global.db.data.users[m.sender].money < 10000) return m.reply("*Uang kamu minimal Rp. 10.000 untuk bermain game ini.*")
    // FIRST PLAYER
    if (!(m.chat in conn.war)) {
      conn.war2[m.chat] = {"war" : false, "turn" : 0, "time" : 0, "money" : 0}
      conn.war[m.chat] = []
      xp = global.db.data.users[m.sender].xp
      conn.war[m.chat][0] = {"user": m.sender, "hp": 5000, "lvl": global.db.data.users[m.sender].level, "turn" : false}
      for (i=1;i<10;i++){
        conn.war[m.chat][i] = {"user": "", "hp" : 0, "lvl" : 0, "turn" : false}
      }
      return m.reply(`*Berhasil masuk ke dalam game sebagai Team A*\n\n*.war join a/b* = join game\n*.war start* = mulai game`)
    }else {   // NOT FIRST PLAYER
      // IF FULL
      if (conn.war2[m.chat].war) {
        return m.reply(`*Permainan sudah dimulai, tidak bisa join.*`)
      }
      // IF YOU ALREADY JOIN THE GAME
      for (i = 0 ; i < conn.war[m.chat].length ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          total = 0
          for (i = 0 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              total += 1
            }
          }
          return m.reply(`*Anda sudah masuk ke dalam game*\n\n*.war join a/b* = join game\n*.war start* = mulai game`)
        }
      }
      
      // JOIN MILIH TIM
      if (args[1]){
        if (args[1].toLowerCase() == "a"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`*Tolong @${conn.war[m.chat][0].user.split('@')[0]} tetapkan modal awal perang (minimal Rp. 1.000.000)*\n\n.war money 1.000.000`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          return m.reply('a')
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`*Uang kamu minimal Rp. ${conn.war2[m.chat].money.toLocaleString()} untuk bermain game ini.*`)
          for (i = 1 ; i < 5 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              xp = global.db.data.users[m.sender].xp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              total = 0
              for (i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`*Berhasil masuk ke dalam game sebagai Team A*\n\n*.war join a/b* = join game\n*.war start* = mulai game`)
            }
          } 
        }else if (args[1].toLowerCase() == "b"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`*Tolong @${conn.war[m.chat][0].user.split('@')[0]} tetapkan modal awal perang (minimal Rp. 1.000.000)*\n\n.war money 1.000.000`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`*Uang kamu minimal Rp. ${conn.war2[m.chat].money.toLocaleString()} untuk bermain game ini.*`)
          for (i = 5 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              xp = global.db.data.users[m.sender].xp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              total = 0
              for (i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`*Berhasil masuk ke dalam game sebagai Team B*\n\n*.war join a/b* = join game\n*.war start* = mulai game`)
            }
          }
        }else {
          return m.reply(`*Pilih salah satu tim A atau B*\n\n.war join A\n.war join B`)
        }
      }else {
        // JOIN SESUAI URUTAN
        return m.reply(`*Pilih salah satu tim A atau B*\n\n.war join A\n.war join B`)
      }
      

      // CHECK IF ROOM FULL
      for (i = 0 ; i < conn.war[m.chat].length ; i++) {
        total = 0
        if (conn.war[m.chat][i].user != ""){
          total += 1
        }
        if (total == 10) conn.war2[m.chat].war = true
      }
    }
  }

  // LEFT GAME
  if (args[0] == "left"){
    // IF GAME START
    if (conn.war2[m.chat].war) {
      m.reply(`*Perang sudah dimulai, anda tidak bisa keluar*`)
    }else {   // IF NOT
      for (i = 0 ; i < 10 ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          return m.reply(`*Berhasil keluar dari game*\n\n*Butuh ${total} user lagi*`)
        }
      }
      return m.reply(`*Kamu tidak sedang berada di dalam game*`)
    }
  }

  // CEK PLAYER
  if (args[0] == "player"){ 
    if (!(m.chat in conn.war)) return m.reply(`*Tidak ada pemain yang join room War Zone*`)
    var teamA = []
    var teamB = []
    var teamAB = []
    for (i = 0 ; i < conn.war[m.chat].length ; i++){
      if (i < 5){
        if (conn.war[m.chat][i].user != "") teamA.push(conn.war[m.chat][i].user)
      }else {
        if (conn.war[m.chat][i].user != "") teamB.push(conn.war[m.chat][i].user)
      }
      teamAB.push(conn.war[m.chat][i].user)
    }
    // return m.reply(teamA[0])
    conn.reply(m.chat, `${conn.war2[m.chat].war ? '*Giliran : ' + '@' + conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0] + '*\n*Taruhan : Rp. ' + Number(conn.war2[m.chat].money).toLocaleString() + '*\n\n' : '*Taruhan : Rp. ' + Number(conn.war2[m.chat].money).toLocaleString() + '*\n\n' }*TEAM A :*\n` + teamA.map((v, i )=> `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${conn.war[m.chat][i].lvl} HP: ${conn.war[m.chat][i].hp})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${conn.war[m.chat][i+5].lvl} HP: ${conn.war[m.chat][i+5].hp})`).join`\n`,m, {contextInfo: {
      mentionedJid: teamAB
    }})
  }

  // START GAME
  if (args[0] == "start"){
    if (conn.war2[m.chat].war) return m.reply(`*Perang sudah dimulai, tidak bisa join.*`)
    teamA = 0
    teamB = 0
    for (i=0;i<10;i++){
      if(i<5){
        if (conn.war[m.chat][i].user != "") teamA += 1
      }else{
        if (conn.war[m.chat][i].user != "") teamB += 1
      }
    }

    if (teamA == teamB && teamA > 0){
      conn.war2[m.chat].war = true
      for (i=0;i<5;i++){
        if (conn.war[m.chat][i].user != ""){
          user = conn.war[m.chat][i].user
          return conn.reply(m.chat,`*Permainan berhasil dimulai*\n*Silahkan @${user.split('@')[0]} untuk menyerang musuh*\n\n.war player = statistik pemain\n.attack @tag = serang lawan`, m, {contextInfo: { mentionedJid: [user] }})
        }
      }
    }else {
      if (teamA > teamB){
        m.reply(`*Team B kurang ${teamA-teamB} orang lagi agar permainan adil.*`)
      }else {
        m.reply(`*Team A kurang ${teamB-teamA} orang lagi agar permainan adil.*`)
      }
    }
  }

}
handler.help = ['war']
handler.tags = ['game']
handler.command = /^(war)$/i
handler.group = true
module.exports = handler
