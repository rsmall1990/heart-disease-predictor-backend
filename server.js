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
// import middlware
const cors = require("cors")
const morgan = require("morgan")

/* DATABASE CONNECTION
______________________________*/
// Establish Connection
mongoose.connect(DATABASE_URL)
// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(error))

/* MODELS
______________________________*/
const PeopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: Number,
    cp: Number,
    trestbps: Number,
    chol: Number,
    fbs: Number,
    restecg: Number,
    thalach: Number,
    exang: Number,
    oldpeak: Number,
    slope: Number,
    ca: Number,
    thal: Number,
    probability: Number,
  })
  
  const People = mongoose.model("People", PeopleSchema)

/* MIDDLEWARE
______________________________*/
  app.use(cors()) // to prevent cors errors, open access to all origins
  app.use(morgan("dev")) // logging
  app.use(express.json()) // parse json bodies

/* ROUTES
______________________________*/
// create a test route
app.get("/", (req, res) => {
  res.send("Heart Disease Predictor Backend")
})

// PEOPLE INDEX ROUTE
app.get("/people", async (req, res) => {
    try {
      // send all people
      res.json(await People.find({}))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
  })
  
  // PEOPLE CREATE ROUTE
  app.post("/people", async (req, res) => {
    try {
      // send all people
      res.json(await People.create(req.body))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
  })  

// PEOPLE DELETE ROUTE
app.delete("/people/:id", async (req, res) => {
    try {
      // send all people
      res.json(await People.findByIdAndDelete(req.params.id))
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
  })
  
  // PEOPLE UPDATE ROUTE
  app.put("/people/:id", async (req, res) => {
    try {
      // send all people
      res.json(
        await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
      )
    } catch (error) {
      //send error
      res.status(400).json(error)
    }
  })

/* LISTENER
______________________________*/
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))