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
    var li = $('<li></li>')
    li.text(`${message.from}: ${message.text}`)
    $('#messages').append(li)
})
socket.on('disconnect',function (){
    console.log('Disconnected from the server')
})



$('#message-form').on('submit',function(e){
    e.preventDefault()
    socket.emit('createMessage',{
        from: 'User',
        text: $('[name=message]').val()

    },function(){

    })
})
