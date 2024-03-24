const http = require("http")
const express = require("express")
const path = require("path")
const app = express()
const server = http.createServer(app)
const {Server} = require("socket.io")

const io = new Server(server)

//middleware
app.use(express.static(path.resolve("./public")))

//socket.io

io.on("connection", (socket) => {
    socket.on("message", (message) => {
       io.emit("message", message)
    })
})

app.get("/", (req,res) => {
    return res.sendFile("/public/index.html")
})




server.listen(3000)
