const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const purchaseController = {
    addPurchase: async (req, res) => {
        try {
            const newPurchase = {
                userId_purchase: req.body.userID,
                travelId_purchase: req.body.travelID,
                amount_purchase: req.body.amount,
                total_purchase: req.body.total,
                paymentMethod_purchase: req.body.paymentMethod
            };

            const result = await prisma.purchase.create({
                data: newPurchase
            });

            res.json({ message: 'Compra agregada correctamente', purchaseId: result.id_purchase });
        } catch (error) {
            console.error('Error al agregar compra:', error);
            res.status(500).json({ message: 'Error al agregar compra', error: error });
        }
    },

    getPurchaseById: async (req, res) => {
        try {
            const purchaseId = parseInt(req.params.id);
            const result = await prisma.purchase.findUnique({
                where: { id_purchase: purchaseId }
            });

            if (result !== null) {
                res.json({ purchase: result });
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
            const userId = parseInt(req.params.id);
            const result = await prisma.purchase.findMany({
                where: { userId_purchase: userId }
            });

            res.json({ purchases: result });
        } catch (error) {
            console.error('Error al obtener compras por ID de usuario:', error);
            res.status(500).json({ message: 'Error al obtener compras por ID de usuario', error: error });
        }
    }
};

module.exports = purchaseController;