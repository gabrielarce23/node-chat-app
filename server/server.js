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

    socket.emit('newMessage',{
        from: 'User1',
        text: 'Hello everyone!',
        createAt: 123
    })

    socket.on('createMessage', (message) =>{
        console.log('createMessage',message)

    })

    socket.on('disconnect',()=>{
        console.log('Disconnected from the server')
    })
})


app.use(express.static(publicPath))

server.listen(port,()=>console.log(`Listening port ${port}`))