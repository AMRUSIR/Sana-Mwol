const Sana = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command  ENTHEKILUM EZHUTH NENBA"

if (Config.WORKTYPE == 'private') {

    Sana.addCommand({ pattern: 'barcode ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${match[1]}`, { responseType: 'arraybuffer' })
//EXPORTING THE DATA
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.ALL})

    }));
}

else if (Config.WORKTYPE == 'public') {

    Sana.addCommand({ pattern: 'barcode ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${match[1]}`, { responseType: 'arraybuffer' })

//EXPORTING THE DATA
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.ALL})

    }));
    
}
