const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

router.post('/add', purchaseController.addPurchase);
router.get('/getById/:id', purchaseController.getPurchaseById);
router.get('/getByUserId/:id', purchaseController.getPurchasesByUserId);

module.exports = router;