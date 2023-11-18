const db = require('../db');

const User = {
    addUser: (user) => {
        return new Promise((resolve, reject) => {
            db.query("CALL AddUser(?, ?, ?, ?, ?)",
                [user.name, user.lastName, user.email, user.password, user.age],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (result && result.affectedRows > 0) {
                            resolve({ message: 'Usuario registrado correctamente', userId: result.insertId });
                        } else {
                            resolve({ message: 'No se pudo registrar el usuario' });
                        }
                    }
                });
        });
    },

    modifyUser: (user) => {
        return new Promise((resolve, reject) => {
            db.query("CALL ModifyUser(?, ?, ?, ?)",
                [user.name, user.lastName, user.password, user.age],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (result && result.affectedRows > 0) {
                            resolve({ message: 'Usuario modificado correctamente' });
                        } else {
                            resolve({ message: 'No se pudo modificar el usuario' });
                        }
                    }
                });
        });
    },

    getUserByEmail: (user) => {
        return new Promise((resolve, reject) => {
            db.query("CALL GetUserByEmail(?, ?)",
                [user.email, user.password],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (result && result.length > 0) {
                            resolve({ message: 'Inicio de sesión exitoso', user: result[0] });
                        } else {
                            resolve({ message: 'Credenciales incorrectas' });
                        }
                    }
                });
        });
    },

    getUserByID: (user) => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("Hola, entré");

                const [rows] = await db.query("CALL GetUserByID(?)", [user.id]);

                if (rows && rows[0] && rows[0][0]) {
                    console.log('Usuario encontrado:', rows[0][0]);
                    resolve({ message: 'Usuario encontrado', user: rows[0][0] });
                } else {
                    console.log('Usuario no encontrado');
                    resolve({ message: 'Usuario no encontrado' });
                }
            } catch (err) {
                console.error('Error al obtener usuario por ID:', err);
                reject({ message: 'Error al obtener usuario por ID', error: err });
            } finally {
                console.log("Hola, salí");
            }
        });
    }
};

module.exports = User;

/* const User = {
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

    getUserByID: async (user, callback) => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("Hola, entré");
    
                const [rows] = await db.query("CALL GetUserByID(?)", [user.id]);
    
                if (rows && rows[0] && rows[0][0]) {
                    console.log('Usuario encontrado:', rows[0][0]);
                    resolve(rows[0][0]);
                } else {
                    console.log('Usuario no encontrado');
                    resolve(null);
                }
            } catch (err) {
                console.error('Error al obtener usuario por ID:', err);
                reject(err);
            } finally {
                console.log("Hola, salí");
            }
        });
    }
}; */

//module.exports = User;