const mongoose = require('mongoose')

const inspectionReport = mongoose.Schema(
{
    id: {
        type: Number,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    date:{
        type: String,
        required: true
    },

    exterior:{
        type: String,
        required: true
    },

    interior:{
        type: String,
        required: true
    }

}
)

module.exports = mongoose.model("Report",inspectionReport)