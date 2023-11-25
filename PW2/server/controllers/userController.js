const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userController = {
    addUser: async (req, res) => {
        try {
            const newUser = {
                name_user: req.body.name,
                lastName_user: req.body.lastName,
                email_user: req.body.email,
                password_user: req.body.password,
                age_user: req.body.age,
            };

            const result = await prisma.user.create({
                data: newUser
            });

            res.json({ message: 'Usuario agregado correctamente', userId: result.id });
        } catch (error) {
            console.error('Error al agregar usuario:', error);
            res.status(500).json({ message: 'Error al agregar usuario', error: error });
        }
    },

    modifyUser: async (req, res) => {
        try {
            const modifyUser = {
                id_user: req.body.id,
                name_user: req.body.name,
                lastName_user: req.body.lastName,
                password_user: req.body.password,
                age_user: req.body.age,
            };

            const result = await prisma.user.update({
                where: { id_user: modifyUser.id_user },
                data: {
                    name_user: modifyUser.name_user,
                    lastName_user: modifyUser.lastName_user,
                    password_user: modifyUser.password_user,
                    age_user: modifyUser.age_user,
                }
            });

            res.json({ message: 'Usuario modificado correctamente' });
        } catch (error) {
            console.error('Error al modificar usuario:', error);
            res.status(500).json({ message: 'Error al modificar usuario', error: error });
        }
    },

    getUserByEmail: async (req, res) => {
        try {
            const identification = {
                email_user: req.body.email,
                password_user: req.body.password,
            };

            const result = await prisma.user.findMany({
                where: {
                    email_user: identification.email_user,
                    password_user: identification.password_user,
                },
            });

            if (result.length > 0) {
                res.json({ message: 'Inicio de sesión exitoso', user: result[0] });
            } else {
                res.status(401).json({ message: 'Inicio de sesión fallido. Verifica tu correo electrónico y contraseña.' });
            }
        } catch (error) {
            console.error('Error al obtener usuario por correo electrónico:', error);
            res.status(500).json({ message: 'Error al obtener usuario por correo electrónico', error: error });
        }
    },

    getUserByID: async (req, res) => {
        try {
            const id = parseInt(req.params.id);

            const result = await prisma.user.findUnique({
                where: { id_user: id }
            });

            if (result !== null) {
                res.json({ message: 'Usuario encontrado', user: result });
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            console.error("Error: ", error);
            res.status(500).json({ message: 'Error al obtener usuario por ID', error: error });
        }
    }
};

module.exports = userController;