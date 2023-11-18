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

        Purchase.addPurchase(newPurchase)
            .then((result) => {
                res.json({ message: 'Compra agregada correctamente', purchaseId: result.insertId });
            })
            .catch((error) => {
                console.error('Error al agregar compra:', error);
                res.status(500).json({ message: 'Error al agregar compra', error: error });
            });
    },

    getPurchaseById: async (req, res) => {
        try {
            const purchaseId = req.params.id;
            const result = await Purchase.getPurchaseById(purchaseId);

            if (result.length > 0) {
                res.json({ purchase: result[0] });
            } else {
                res.status(404).json({ message: 'Compra no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener compra por ID:', error);
            res.status(500).json({ message: 'Error al obtener compra por ID', error: error });
        }
    },

    getPurchasesByUserId: async (req, res) => {
        try {
            const userId = req.params.id;
            const result = await Purchase.getPurchasesByUserId(userId);

            res.json({ purchases: result });
        } catch (error) {
            console.error('Error al obtener compras por ID de usuario:', error);
            res.status(500).json({ message: 'Error al obtener compras por ID de usuario', error: error });
        }
    }
};
/* const purchaseController = {
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
}; */

module.exports = purchaseController;