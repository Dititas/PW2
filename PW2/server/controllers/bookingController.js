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
};

module.exports = bookingController;

/* const Provider = require('./models/Provider');

const providerController = {
    addProvider: (req, res) => {
        const newProvider = req.body.name;
        Provider.addProvider((newProvider, result) => {
            res.json({  message: 'Usuario agregado correctamente', providerId: result.insertId });
        });
    },

    getProviderByName: (req, res) => {
        const name = req.body.name;
        Provider.getProviderByName((name, result) => {
            res.json({  message: 'Usuario agregado correctamente' });
        });
    }
};

module.exports = providerController; */