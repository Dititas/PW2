const Booking = require('../models/Booking');

const bookingController = {
    addBooking: (req, res) => {
        const newBooking = {
            idUser: req.body.idUser,
            idOutboundFlight: req.body.idOutboundFlight,
            idReturnFlight: req.body.idReturnFlight,
            reservationDate: req.body.reservationDate,
            amountPeople: req.body.amountPeople
        };

        Booking.addBooking(newBooking)
            .then((result) => {
                res.json({ message: 'Reserva agregada correctamente', bookingId: result.insertId });
            })
            .catch((error) => {
                console.error('Error al agregar reserva:', error);
                res.status(500).json({ message: 'Error al agregar reserva', error: error });
            });
    },

    getBookingById: async (req, res) => {
        try {
            const bookingId = req.params.id;
            const result = await Booking.getBookingById(bookingId);

            if (result.length > 0) {
                res.json({ booking: result[0] });
            } else {
                res.status(404).json({ message: 'Reserva no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener reserva por ID:', error);
            res.status(500).json({ message: 'Error al obtener reserva por ID', error: error });
        }
    },

    getAllBookings: async (req, res) => {
        try {
            const result = await Booking.getAllBookings();
            res.json({ bookings: result });
        } catch (error) {
            console.error('Error al obtener todas las reservas:', error);
            res.status(500).json({ message: 'Error al obtener todas las reservas', error: error });
        }
    }
};
/* const bookingController = {
    addBooking: (req, res) => {
        const newBooking = {
            idUser: req.body.idUser,
            idOutboundFlight: req.body.idOutboundFlight,
            idReturnFlight: req.body.idReturnFlight,
            reservationDate: req.body.reservationDate,
            amountPeople: req.body.amountPeople
        };

        Booking.addBooking(newBooking, (result) => {
            res.json({ message: 'Reserva agregada correctamente', bookingId: result.insertId });
        });
    },

    getBookingById: (req, res) => {
        const bookingId = req.params.id;

        Booking.getBookingById(bookingId, (result) => {
            if (result.length > 0) {
                res.json({ booking: result[0] });
            } else {
                res.status(404).json({ message: 'Reserva no encontrada' });
            }
        });
    },

    getAllBookings: (req, res) => {
        Booking.getAllBookings((result) => {
            res.json({ bookings: result });
        });
    }
}; */

module.exports = bookingController;