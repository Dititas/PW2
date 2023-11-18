const db = require('../db');

const Booking = {
    addBooking: (booking) => {
        return new Promise((resolve, reject) => {
            db.query("CALL AddBooking(?, ?, ?, ?, ?)",
                [
                    booking.idUser,
                    booking.idOutboundFlight,
                    booking.idReturnFlight,
                    booking.reservationDate,
                    booking.amountPeople
                ],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        // Verifica el resultado de la operación y proporciona un mensaje adecuado
                        if (result && result.affectedRows > 0) {
                            resolve({ message: 'Reserva registrada correctamente', bookingId: result.insertId });
                        } else {
                            resolve({ message: 'No se pudo registrar la reserva' });
                        }
                    }
                }
            );
        });
    },

    getBookingByID: (bookingID) => {
        return new Promise((resolve, reject) => {
            db.query("CALL GetBookingByID(?)", [bookingID], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // Verifica el resultado de la operación y proporciona un mensaje adecuado
                    if (result && result.length > 0) {
                        resolve({ message: 'Reserva encontrada', booking: result[0] });
                    } else {
                        resolve({ message: 'Reserva no encontrada' });
                    }
                }
            });
        });
    },

    getAllBookings: () => {
        return new Promise((resolve, reject) => {
            db.query("CALL GetAllBookings()", (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // Verifica el resultado de la operación y proporciona un mensaje adecuado
                    if (result && result.length > 0) {
                        resolve({ message: 'Reservas encontradas', bookings: result });
                    } else {
                        resolve({ message: 'No se encontraron reservas' });
                    }
                }
            });
        });
    }
};
module.exports = Booking;