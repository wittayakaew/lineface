const express =require('express')
const line = require('@line/bot-sdk')
const app = express()
const port = 3000
const user = 'Uae8f94feded01ddb88397b41bcdfa92b'
const cors = require('cors')
const bodyParser = require('body-parser')

const config= {
    channelAccessToken:"1BM8XzWE+kJ3wsj5PCPmIoiuNDxbbRKDZL9DW7yNYVXqdY/oaImBtJEaFlOrR0y8XaHyMgpuds12EORe3gxyqu4KfnZ7Ui4ZQ7RSxPiG4An48AZuTIIkEEWJkOzKiISsO/vQX4gMgTpvMlGdOnFUowdB04t89/1O/w1cDnyilFU=",

    channelSecret:"077974c576562fd1e1d111118e55078d"
}

const client = new line.Client(config);

app.use(cors())
app.use(bodyParser.json())

app.post('/login',(req,res)=>{
    console.log('test')
    console.log(req.body)
    const messname={
        type:'text',
        text:req.body.name
    }

    const messemail={
        type:'text',
        text:req.body.email
    }
    const messpicture={
        type:'image',
        originalContentUrl:req.body.picture,
        previewImageUrl:req.body.picture
    }

    client.pushMessage(user,messname)
    client.pushMessage(user,messemail)
    client.pushMessage(user,messpicture)

})


// app.get('/',(req,res)=>{
//     res.send("Hello World")
// })

// app.post('/',line.middleware(config),(req,res)=>{
 
// Promise.all(req.body.events.map(handleEvens)).then((result)=>res.json(result))

// })

// function handleEvens(event){
//     if(event.type!=='message'|| event.message.type!=='text'){
//         return Promise.resolve(null)
//     }
//     if(event.message.text=="o"){
//         return client.replyMessage(event.replyToken,{
//             type :'sticker',
//         packageId:"1",
//         stickerId:"131"
//     })
        
//     }
//     return client.replyMessage(event.replyToken,{
//         type :'text',
//         text :event.message.text
//     })
// }

app.listen(port, () => console.log(`App running ${port}`))
