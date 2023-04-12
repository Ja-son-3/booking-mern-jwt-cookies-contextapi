import express from "express"
import Hotel from "../models/Hotel.js"
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

//Create
router.post("/", verifyAdmin, createHotel)

//Update
router.put("/:id", verifyAdmin, updateHotel)

//Delete
router.delete("/:id", verifyAdmin, deleteHotel)

//Get
router.get("/find/:id", getHotel)

//Get All
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)

export default router