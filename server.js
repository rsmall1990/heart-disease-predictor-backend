/* DEPENDENCIES
______________________________*/
// get .env variables
require("dotenv").config()
// pull DATABASE_URL & PORT from .env, give default value of 3001
const { PORT = 3001, DATABASE_URL } = process.env
// import express
const express = require("express")
// create application object
const app = express()
// import mongoose
const mongoose = require("mongoose")

/* DATABASE CONNECTION
______________________________*/
// Establish Connection
mongoose.connect(DATABASE_URL)
// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(error))

/* ROUTES
______________________________*/
// create a test route
app.get("/", (req, res) => {
  res.send("hello world")
})

/* LISTENER
______________________________*/
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))