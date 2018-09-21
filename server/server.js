const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const port = process.env.PORT || 3000


const publicPath = path.join(__dirname,'../public')

var app = express()
var server = http.createServer(app)

var io = socketIO(server)

io.on('connection', (socket)=>{
    
    console.log('New conection to server')

    socket.emit('welcomeMessage',{
        from: 'Admin',
        text: 'Welcome to the chat app'
    })

    socket.broadcast.emit('newUserJoined',{
        from: 'Admin',
        text: 'New user joined'
    })
    

    socket.on('createMessage', (message) =>{
        console.log('createMessage',message)

        io.emit('newMessage',{
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        })

        /*socket.broadcast.emit('newMessage',{
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        })*/

    })

    socket.on('disconnect',()=>{
        console.log('Disconnected from the server')
    })
})


app.use(express.static(publicPath))

server.listen(port,()=>console.log(`Listening port ${port}`))