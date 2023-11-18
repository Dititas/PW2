const Travel = require('../models/Travel');

const travelController = {
    addTravel: (req, res) => {
        const newTravel = {
            airline: req.body.airline,
            flightNumber: req.body.flightNumber,
            origin: req.body.origin,
            destination: req.body.destination,
            departureDate: req.body.departureDate,
            arrivalDate: req.body.arrivalDate,
            price: req.body.price,
            duration: req.body.duration
        };

        Travel.addTravel(newTravel)
            .then((result) => {
                res.json({ message: 'Viaje agregado correctamente', travelId: result.insertId });
            })
            .catch((error) => {
                console.error('Error al agregar viaje:', error);
                res.status(500).json({ message: 'Error al agregar viaje', error: error });
            });
    },

    getTravelById: async (req, res) => {
        try {
            const travelId = req.params.id;
            const result = await Travel.getTravelById(travelId);

            if (result.length > 0) {
                res.json({ travel: result[0] });
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
            const result = await Travel.getAllTravels();
            res.json({ travels: result });
        } catch (error) {
            console.error('Error al obtener todos los viajes:', error);
            res.status(500).json({ message: 'Error al obtener todos los viajes', error: error });
        }
    }
};

/* const travelController = {
    addTravel: (req, res) => {
        const newTravel = {
            airline: req.body.airline,
            flightNumber: req.body.flightNumber,
            origin: req.body.origin,
            destination: req.body.destination,
            departureDate: req.body.departureDate,
            arrivalDate: req.body.arrivalDate,
            price: req.body.price,
            duration: req.body.duration
        };

        Travel.addTravel(newTravel, (result) => {
            res.json({ message: 'Viaje agregado correctamente', travelId: result.insertId });
        });
    },

    getTravelById: (req, res) => {
        const travelId = req.params.id;

        Travel.getTravelById(travelId, (result) => {
            if (result.length > 0) {
                res.json({ travel: result[0] });
            } else {
                res.status(404).json({ message: 'Viaje no encontrado' });
            }
        });
    },

    getAllTravels: (req, res) => {
        Travel.getAllTravels((result) => {
            res.json({ travels: result });
        });
    }
}; */

module.exports = travelController;