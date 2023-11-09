const db = require('./db');

const Purchase = {
    addPurchase: (purchase, callback) => {
        db.query("CALL AddPurchase(?, ?, ?, ?, ?)",
            [
                purchase.userID,
                purchase.travelID,
                purchase.amount,
                purchase.total,
                purchase.paymentMethod
            ],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    },

    getPurchaseByID: (purchaseID, callback) => {
        db.query("CALL GetPurchaseByID(?)", [purchaseID], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    getPurchasesByUserID: (userID, callback) => {
        db.query("CALL GetPurchasesByUserID(?)", [userID], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = Purchase;