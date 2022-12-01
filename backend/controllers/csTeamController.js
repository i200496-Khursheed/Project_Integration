const Csteam = require('../models/csTeamModel') //Csteam model
const mongoose = require('mongoose')

// get all csteams
const getCSTeams = async (req, res) => {
    const csteams = await Csteam.find({}).sort({createdAt: -1})

    res.status(200).json(csteams)
}

// get a single csteam
const getCSTeam = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No such construction team'})
    }

    const csteam = await Csteam.findById(id)

    if (!csteam) 
    {
        return res.status(404).json({error: 'No such construction team'})
    }

    res.status(200).json(csteam)
}
// create a csteam
const createCSTeam = async (req,res) => {
    const {service, summary, fee, status, contact, image} = req.body

    // add doc to db
    try {
        const csteam = await Csteam.create({service, summary, fee, status, contact, image})
        res.status(200).json(csteam)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// update a csteam
const updateCSTeam = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such construction team'})
    }

    const csteam = await Csteam.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!csteam) {
        return res.status(404).json({error: 'No such construction team'})
    }

    res.status(200).json(csteam)
}

// delete a csteam
const deleteCSTeam = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such construction team'})
    }

    const csteam = await Csteam.findOneAndDelete({_id: id})

    if (!csteam) {
        return res.status(404).json({error: 'No such construction team'})
    }

    res.status(200).json(csteam)
}

module.exports = {
    createCSTeam,
    getCSTeams,
    getCSTeam,
    deleteCSTeam,
    updateCSTeam
}