const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;
let user= [];
let room= [];

app.use(cors());
app.use(express.json())
app.use(express.urlencoded( { extended: true }));

app.use(router);

io.on('connection', (socket) => {


  io.emit('transfer-name',user)
  console.log('a user connected');
  socket.on('input-name',(data)=>{
    user.push(data)
    io.emit('transfer-name',user)
  })

  io.emit('transfer-room',room)
  socket.on('input-room',(data)=>{
    room.push(data)
    io.emit('transfer-room',room)
  })

  socket.on('start',(data)=>{
    io.emit('play',data)
  })

  socket.on('winner',(data)=>{
    console.log(data)
    socket.broadcast.emit("Winner",data)
  })

  socket.on('Home',()=>{
    io.emit('backhome')
    user=[]
  })


});

http.listen(PORT, () => {
  console.log('listening on *:3000');
});