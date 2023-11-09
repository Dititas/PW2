const db = require('./db');

const User = {
    addUser: (user, callback) => {
        db.query("CALL AddUser(?, ?, ?, ?, ?)", 
        [user.name, user.lastName, user.email, user.password, user.age],
        (err, result) => {
            if(err) throw err;
            callback(result);
        });
    },

    modifyUser: (user, callback) => {
        db.query("CALL ModifyUser(?, ?, ?, ?)",
        [user.name, user.lastName, user.password, user.age],
        (err, result) => {
            if(err) throw err;
            callback(result);
        });
    },

    getUserByEmail: (user, callback) => {
        db.query("CALL GetUserByEmail(?, ?)",
        [user.email, user.password],
        (err, result) => {
            if(err) throw err;
            callback(result);
        });
    },

    getUserByID: (user, callback) => {
        db.query("CALL GetUserByID(?)",
        [user.id],
        (err, result) => {
            if(err) throw err;
            callback(result);
        });
    }
};

module.exports = User;
/* const mongoose = require('mongoose')

const user = new mongoose.Schema({
    nombre: {type: String, required: 'Nombre incompleto'},
    apellido: {type: String, required: 'Apellido incompleto'},
    edad: {type: Number, required: 'Edad incompleta'},
    email: {type: String, required: 'Email incompleto'},
    contrasenia: {type: String, required: 'Contraseña incompleta'}
},{
    timestamps: true
})

module.exports = mongoose.model('Usuario', user) */