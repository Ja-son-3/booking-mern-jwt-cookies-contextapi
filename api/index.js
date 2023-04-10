import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_STRING)
        console.log("Connected to database")
    } catch (err) {
        throw err
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected!")
})

//Middlewares

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/user", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.listen(8800, () => {
    connect()
    console.log("Connected to backend")
})