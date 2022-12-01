const mongoose = require("mongoose");

const Schema = mongoose.Schema

const AgentSchema = new Schema(
    {
      Company_Name: {
        type: String,
        required: true
      },
      Agent_Name: {
        type: String,
        required: true
      },
      Agent_Description: {
        type: String,
        required: true
      },
      City: {
        type: String,
        required: true
      },
      Contact: {
        type: Number,
        required: true
      },
      Email: {
        type: String,
        required: true
      }
},
{
  timestamps : true
}

)
module.exports = mongoose.model('Agent', AgentSchema)