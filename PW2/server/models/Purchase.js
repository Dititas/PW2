const db = require('../db');

const Purchase = {
    addPurchase: (purchase) => {
        return new Promise((resolve, reject) => {
            db.query("CALL AddPurchase(?, ?, ?, ?, ?)",
                [
                    purchase.userID,
                    purchase.travelID,
                    purchase.amount,
                    purchase.total,
                    purchase.paymentMethod
                ],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        // Verifica el resultado de la operación y proporciona un mensaje adecuado
                        if (result && result.affectedRows > 0) {
                            resolve({ message: 'Compra registrada correctamente', purchaseId: result.insertId });
                        } else {
                            resolve({ message: 'No se pudo registrar la compra' });
                        }
                    }
                }
            );
        });
    },

    getPurchaseByID: (purchaseID) => {
        return new Promise((resolve, reject) => {
            db.query("CALL GetPurchaseByID(?)", [purchaseID], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // Verifica el resultado de la operación y proporciona un mensaje adecuado
                    if (result && result.length > 0) {
                        resolve({ message: 'Compra encontrada', purchase: result[0] });
                    } else {
                        resolve({ message: 'Compra no encontrada' });
                    }
                }
            });
        });
    },

    getPurchasesByUserID: (userID) => {
        return new Promise((resolve, reject) => {
            db.query("CALL GetPurchasesByUserID(?)", [userID], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // Verifica el resultado de la operación y proporciona un mensaje adecuado
                    if (result && result.length > 0) {
                        resolve({ message: 'Compras encontradas', purchases: result });
                    } else {
                        resolve({ message: 'No se encontraron compras para el usuario' });
                    }
                }
            });
        });
    }
};

module.exports = Purchase;