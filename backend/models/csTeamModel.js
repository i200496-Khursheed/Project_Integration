const mongoose = require('mongoose')

const Schema = mongoose.Schema

const csTeamSchema = new Schema({
    service: {
        type: String,
        required: true
    },

    summary: {
        type: String,
        required: true
    },

    fee: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }

}, { timestamps: true })

// this creates collection of csteams automatically on mongo db
module.exports = mongoose.model('Csteam', csTeamSchema)