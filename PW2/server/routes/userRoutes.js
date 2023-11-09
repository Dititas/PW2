const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// Rutas para agregar, modificar, obtener por correo electrónico y obtener por ID
router.post('/add', userController.addUser); // Usamos POST para agregar un nuevo usuario
router.put('/modify', userController.modifyUser); // Usamos PUT para modificar un usuario existente
router.post('/getByEmail', userController.getUserByEmail); // Usamos POST para obtener un usuario por correo electrónico
router.get('/getByID/:id', userController.getUserByID); // Usamos GET para obtener un usuario por ID

module.exports = router;
/* const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/login', userController.login)
router.post('/register', userController.register)
router.post('/update', userController.update)

module.exports = router */