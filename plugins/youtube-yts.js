import yts from 'yt-search'

var handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Cari apa?'
  let cari = await yts(`${text}`)
    let dapet = cari.all
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video š„', usedPrefix + 'getvid ' + v.url, '\nā *Duration:* ' + v.timestamp + '\nā²ļø *Uploaded:* ' + v.ago + '\nšļø *Views:* ' + v.views + '\nš *Url:* ' + v.url],
          ['Audio š§', usedPrefix + 'getaud ' + v.url, '\nā *Duration:* ' + v.timestamp + '\nā²ļø *Uploaded:* ' + v.ago + '\nšļø *Views:* ' + v.views + '\nš *Url:* ' + v.url]
        ]])
	}) 
	return conn.sendList(m.chat, '*āāāć Youtube Search ćāāā*', `Silahkan pilih type di bawah...\n*Teks yang anda minta:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `YouTube Search š`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i


export default handler
