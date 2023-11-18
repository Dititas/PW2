const db = require('../db');

const Travel = {
    addTravel: (travel) => {
        return new Promise((resolve, reject) => {
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
                    if (err) {
                        reject(err);
                    } else {
                        // Verifica el resultado de la operación y proporciona un mensaje adecuado
                        if (result && result.affectedRows > 0) {
                            resolve({ message: 'Viaje registrado correctamente', travelId: result.insertId });
                        } else {
                            resolve({ message: 'No se pudo registrar el viaje' });
                        }
                    }
                }
            );
        });
    },

    modifyTravel: (travel) => {
        return new Promise((resolve, reject) => {
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
                    if (err) {
                        reject(err);
                    } else {
                        // Verifica el resultado de la operación y proporciona un mensaje adecuado
                        if (result && result.affectedRows > 0) {
                            resolve({ message: 'Viaje modificado correctamente' });
                        } else {
                            resolve({ message: 'No se pudo modificar el viaje' });
                        }
                    }
                }
            );
        });
    },

    deleteTravelByID: (travelID) => {
        return new Promise((resolve, reject) => {
            db.query("CALL DeleteTravelByID(?)", [travelID], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // Verifica el resultado de la operación y proporciona un mensaje adecuado
                    if (result && result.affectedRows > 0) {
                        resolve({ message: 'Viaje eliminado correctamente' });
                    } else {
                        resolve({ message: 'No se pudo eliminar el viaje' });
                    }
                }
            });
        });
    },

    getTravelByID: (travelID) => {
        return new Promise((resolve, reject) => {
            db.query("CALL GetTravelByID(?)", [travelID], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // Verifica el resultado de la operación y proporciona un mensaje adecuado
                    if (result && result.length > 0) {
                        resolve({ message: 'Viaje encontrado', travel: result[0] });
                    } else {
                        resolve({ message: 'Viaje no encontrado' });
                    }
                }
            });
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