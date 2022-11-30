const express = require('express')
const {
    createAgentInfo,
    getAgentInfos,
    getAgentInfo,
    deleteAgentInfo,
    updateAgentInfo
} = require('../controllers/agentController')

const router = express.Router()

router.get('/', getAgentInfos)

router.get('/:id', getAgentInfo)
 
router.post('/', createAgentInfo)

router.delete('/:id', deleteAgentInfo)

router.put('/:id', updateAgentInfo)

module.exports = router