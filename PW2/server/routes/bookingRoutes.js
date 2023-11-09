const express = require('express');
const router = express.Router();
const bookingController = require('./controllers/bookingController');

router.post('/add', bookingController.addBooking);
router.get('/getById/:id', bookingController.getBookingById);
router.get('/getAll', bookingController.getAllBookings);

module.exports = router;

/* const express = require('express');
const router = express.Router();
const providerController = require('./controllers/providerController');

router.get('add', providerController.addProvider);
router.get('getByName', providerController.getProviderByName);

modeule.exports = providerRouter; */