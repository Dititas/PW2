const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const { PrismaClient } = require('./generated/client/edge')

const prisma = new PrismaClient()
app.use(cors());
app.options('*', cors());

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      fontSrc: ["'self'", 'http://localhost:2322'],
    },
  })
);

app.use((req, res, next) => {  
  next(); 
});

app.use(bodyParser.urlencoded({ extended: false }));

const userRoutes = require('./routes/userRoutes');
const travelRoutes = require('./routes/travelRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/user', userRoutes);
app.use('/travel', travelRoutes);
app.use('/purchase', purchaseRoutes);
app.use('/booking', bookingRoutes);

const PORT = 2322;
app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log('Conexión a la base de datos establecida con éxito.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); // Salir de la aplicación si la conexión falla
  }

  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

// Manejar la desconexión de la base de datos al cerrar la aplicación
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
/* const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db'); 
const helmet = require('helmet');
const bodyParser = require('body-parser');


const userRoutes = require('./routes/userRoutes');
const travelRoutes = require('./routes/travelRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use(cors());
app.options('*', cors());

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      fontSrc: ["'self'", 'http://localhost:2322'],
    },
  })
);


app.use((req, res, next) => {  
  next(); 
});

app.use('/user', userRoutes);
app.use('/travel', travelRoutes);
app.use('/purchase', purchaseRoutes);
app.use('/booking', bookingRoutes);

const PORT = 2322;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
 */