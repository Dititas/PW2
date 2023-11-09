const Purchase = require('../models/Purchase');

const purchaseController = {
    addPurchase: (req, res) => {
        const newPurchase = {
            userID: req.body.userID,
            travelID: req.body.travelID,
            amount: req.body.amount,
            total: req.body.total,
            paymentMethod: req.body.paymentMethod
        };

        Purchase.addPurchase(newPurchase, (result) => {
            res.json({ message: 'Compra agregada correctamente', purchaseId: result.insertId });
        });
    },

    getPurchaseById: (req, res) => {
        const purchaseId = req.params.id;

        Purchase.getPurchaseById(purchaseId, (result) => {
            if (result.length > 0) {
                res.json({ purchase: result[0] });
            } else {
                res.status(404).json({ message: 'Compra no encontrada' });
            }
        });
    },

    getPurchasesByUserId: (req, res) => {
        const userId = req.params.id;

        Purchase.getPurchasesByUserId(userId, (result) => {
            res.json({ purchases: result });
        });
    }
};

module.exports = purchaseController;