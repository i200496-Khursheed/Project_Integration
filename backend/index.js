require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const csTeamRoutes = require('./routes/csteams')

const BuyerInfoRoutes = require('./routes/information')

const PropertyRoutes = require('./routes/properties')

const app = express();

// middleware
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/csteams',csTeamRoutes)
app.use('/api/buyerinfo', BuyerInfoRoutes)
app.use('/api/properties', PropertyRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

  //listen for server
   app.listen(process.env.PORT, () => {
   console.log('connected to db & listening on port', process.env.PORT)
    })

    })

    .catch((error) => {
        console.log(error)
    })
