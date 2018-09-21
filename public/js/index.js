var socket = io();

socket.on('connect', function (){
    console.log('Connected to server')
   
    
})


socket.on('welcomeMessage', function(message){
    console.log(message)
})

socket.on('newUserJoined', function(message){
    console.log(message)
})

socket.on('newMessage', function(message){
    console.log('Have a new message',message)
})
socket.on('disconnect',function (){
    console.log('Disconnected from the server')
})

