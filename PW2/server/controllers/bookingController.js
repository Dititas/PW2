const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bookingController = {
    addBooking: async (req, res) => {
        try {
            const newBooking = {
                idUser_booking: req.body.idUser,
                idOutboundFlight_booking: req.body.idOutboundFlight,
                idReturnFlight_booking: req.body.idReturnFlight,
                reservationDate_booking: req.body.reservationDate,
                amountPeople_booking: req.body.amountPeople
            };

            const result = await prisma.booking.create({
                data: newBooking
            });

            res.json({ message: 'Reserva agregada correctamente', bookingId: result.id_booking });
        } catch (error) {
            console.error('Error al agregar reserva:', error);
            res.status(500).json({ message: 'Error al agregar reserva', error: error });
        }
    },

    getBookingById: async (req, res) => {
        try {
            const bookingId = parseInt(req.params.id);
            const result = await prisma.booking.findUnique({
                where: { id_booking: bookingId }
            });

            if (result !== null) {
                res.json({ booking: result });
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
            const result = await prisma.booking.findMany();
            res.json({ bookings: result });
        } catch (error) {
            console.error('Error al obtener todas las reservas:', error);
            res.status(500).json({ message: 'Error al obtener todas las reservas', error: error });
        }
    }
};

module.exports = bookingController;