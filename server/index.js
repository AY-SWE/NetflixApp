/*
    This is our back-end server, which employs some middleware
    to make sure data is received in the proper format (i.e. JSON)
    and hooks up all of our pieces.
    
    @author Andy Yang
*/

// THESE ARE NODE APIs WE WISH TO USE
const express = require('express')
const cors = require('cors')

// CREATE OUR SERVER
const app = express()    //app is our express object
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())


// SETUP THE MIDDLEWARE
app.use(express.json())     //in express server, it does not accept json files by default, so use this to resolve it


// SETUP OUR OWN ROUTERS AS MIDDLEWARE
const authRoute = require('./routes/authRoute')
app.use('/auth', authRoute)

const userRoute = require('./routes/userRoute')
app.use('/api/users', userRoute)

const movieRoute = require('./routes/movieRoute')
app.use('/api/movies', movieRoute)

// const listRoute = require('./routes/listRoute')
// app.use('/api/lists', listRoute)

// INITIALIZE OUR DATABASE OBJECT
const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// PUT THE SERVER IN LISTENING MODE
const apiPort = 8800
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))


