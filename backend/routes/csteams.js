const express = require('express')
const {
    createCSTeam, 
    getCSTeams,
    getCSTeam,
    deleteCSTeam,
    updateCSTeam
} = require('../controllers/csTeamController')
const router = express.Router()

// GET all csteams service
router.get('/', getCSTeams)

//GET a single csteam service
router.get('/:id', getCSTeam)

// POST a new csteam service
router.post('/', createCSTeam)

// old DELETE a service
// router.delete('/:id', (req,res) => {
//     res.json({mssg: 'Delete a service'})
// })

// DELETE a service
router.delete('/:id', deleteCSTeam)

// UPDATE a service
router.patch('/:id', updateCSTeam)

module.exports = router