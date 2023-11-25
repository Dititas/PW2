const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const travelController = {
    addTravel: async (req, res) => {
        try {
            const newTravel = {
                airline_travel: req.body.airline,
                flightNumber_travel: req.body.flightNumber,
                origin_travel: req.body.origin,
                destination_travel: req.body.destination,
                departureDate_travel: req.body.departureDate,
                arrivalDate_travel: req.body.arrivalDate,
                price_travel: req.body.price,
                duration_travel: req.body.duration
            };

            const result = await prisma.travel.create({
                data: newTravel
            });

            res.json({ message: 'Viaje agregado correctamente', travelId: result.id_travel });
        } catch (error) {
            console.error('Error al agregar viaje:', error);
            res.status(500).json({ message: 'Error al agregar viaje', error: error });
        }
    },

    getTravelById: async (req, res) => {
        try {
            const travelId = parseInt(req.params.id);
            const result = await prisma.travel.findUnique({
                where: { id_travel: travelId }
            });

            if (result !== null) {
                res.json({ travel: result });
            } else {
                res.status(404).json({ message: 'Viaje no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener viaje por ID:', error);
            res.status(500).json({ message: 'Error al obtener viaje por ID', error: error });
        }
    },

    getAllTravels: async (req, res) => {
        try {
            const result = await prisma.travel.findMany();
            res.json({ travels: result });
        } catch (error) {
            console.error('Error al obtener todos los viajes:', error);
            res.status(500).json({ message: 'Error al obtener todos los viajes', error: error });
        }
    }
};

module.exports = travelController;