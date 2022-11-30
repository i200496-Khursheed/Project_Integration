const express = require('express');
const {postReport,getReport,getReports,deleteReport, updateReport,update} = require('../controllers/reportController')
// const getReports = require('../Controllers/reportController')
// const getReport = require('../Controllers/reportController')
// const deleteReport = require('../Controllers/reportController')
const router = express.Router();




//middleware
router.use(express.json());
router.post('/', postReport);
router.get('/', getReports);
router.get('/:id', getReport);
router.delete('/:id',deleteReport);
router.post('/',updateReport);

module.exports = router