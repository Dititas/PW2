const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');

router.post('/add', travelController.addTravel);
router.get('/getById/:id', travelController.getTravelById);
router.get('/getAll', travelController.getAllTravels);

module.exports = router;