const io = require("socket.io")();

io.on("connection", (socket)=> {
    console.log("User connected");
    socket.on("message", message => {
        console.log(message);
        // Send the message events to all of the sockets
        io.emit("message", message);
    })
})


io.listen(3001);