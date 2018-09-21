const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
const {generateMessage, generateLocationMessage} = require('./utils/message')

const port = process.env.PORT || 3000


const publicPath = path.join(__dirname,'../public')

var app = express()
var server = http.createServer(app)

var io = socketIO(server)

io.on('connection', (socket)=>{
    
    console.log('New conection to server')

    socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'))

    socket.broadcast.emit('newUserJoined',generateMessage('Admin','New user joined'))
    

    socket.on('createMessage', (message,callback) =>{
        console.log('createMessage',message)

        io.emit('newMessage',generateMessage(message.from,message.text))
        callback('This is form the server')
    })

    socket.on('createLocationMessage',(coords)=>{
        io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude,coords.longitude))
    })

    socket.on('disconnect',()=>{
        console.log('Disconnected from the server')
    })
})


app.use(express.static(publicPath))

server.listen(port,()=>console.log(`Listening port ${port}`))