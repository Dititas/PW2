const db = require('./db');

const Travel = {
    addTravel: (travel, callback) => {
        db.query("CALL AddTravel(?, ?, ?, ?, ?, ?, ?, ?)",
            [
                travel.airline,
                travel.flightNumber,
                travel.origin,
                travel.destination,
                travel.departureDate,
                travel.arrivalDate,
                travel.price,
                travel.duration
            ],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    },

    modifyTravel: (travel, callback) => {
        db.query("CALL ModifyTravel(?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                travel.id,
                travel.airline,
                travel.flightNumber,
                travel.origin,
                travel.destination,
                travel.departureDate,
                travel.arrivalDate,
                travel.price,
                travel.duration
            ],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    },

    deleteTravelByID: (travelID, callback) => {
        db.query("CALL DeleteTravelByID(?)", [travelID], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    getTravelByID: (travelID, callback) => {
        db.query("CALL GetTravelByID(?)", [travelID], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = Travel;
/* const db = require('./db');

const Provider = {
    addProvider: (provider, callback) => {
        db.query("ST",
        [provider],
        (err, result) => {
            if(err) throw err;
            callback(result);
        }
        );
    },

    getProviderByName: (name, callback) => {
        db.query("",
        [name],
        (err, result) => {
            if(err) throw err;
            callback(result);
        });
    }
};

module.exports = Provider; */