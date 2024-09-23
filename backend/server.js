import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectdb.js"
import cookieParser from "cookie-parser"
import { app, server } from "./socket/socket.js"

dotenv.config({
    path: "/.env"
})

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello chat")
})

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

server.listen(port, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${port}`)
})