const db = require('./db');

const Booking = {
    addBooking: (booking, callback) => {
        db.query("CALL AddBooking(?, ?, ?, ?, ?)",
            [
                booking.idUser,
                booking.idOutboundFlight,
                booking.idReturnFlight,
                booking.reservationDate,
                booking.amountPeople
            ],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    },

    getBookingByID: (bookingID, callback) => {
        db.query("CALL GetBookingByID(?)", [bookingID], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    getAllBookings: (callback) => {
        db.query("CALL GetAllBookings()", (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = Booking;