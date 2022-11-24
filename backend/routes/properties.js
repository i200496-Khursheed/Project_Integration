const express = require('express');
const {
      getProperty,
      createProperty,
      updateProperty,
      deleteProperty,
      getAProperty
} = require('../controllers/PropertyController')

const router = express.Router()

router.get('/', getProperty)

router.get('/:id', getAProperty)

router.post('/', createProperty)

router.delete('/:id', deleteProperty)

router.put('/:id', updateProperty)

module.exports = router;


