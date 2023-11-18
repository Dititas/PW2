const express = require('express');
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
