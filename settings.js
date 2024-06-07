//base by DGXeon
//recode by YASSxOFC 
//YouTube: @YASSxOFC


const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: ArFur117" //ur yt chanel name
global.socialm = "IG: @ArFur117" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'Diederich' //ur bot name
global.ownernumber = '6283129627886' //ur owner number
global.ownername = '©Argo_Northhop' //ur owner name
global.websitex = "https://chat.whatsapp.com/BnsvqI21C4c9EDXkK3ft2t" //"https://chat.whatsapp.com/BnsvqI21C4c9EDXkK3ft2t"
global.wagc = "https://chat.whatsapp.com/BnsvqI21C4c9EDXkK3ft2t" //"https://chat.whatsapp.com/BnsvqI21C4c9EDXkK3ft2t"
global.themeemoji = '🐺'
global.wm = "ArFur117"
global.botscript = 'https://chat.whatsapp.com/BnsvqI21C4c9EDXkK3ft2t' //'https://chat.whatsapp.com/BnsvqI21C4c9EDXkK3ft2t' //script link
global.packname = "Diederich"
global.author = "Diederich"
global.creator = "6283129627886@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6283129627886"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})