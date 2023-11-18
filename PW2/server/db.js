const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'fastTraveler',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Verifica la conexión inicial
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.message);
  } else {
    console.log('Conexión a la base de datos MySQL establecida');
    connection.release(); // Libera la conexión después de la verificación
  }
});

// Exporta el pool para que pueda ser utilizado en otros archivos
module.exports = pool.promise();

/* const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'fastTraveler'
});

function connectToDatabase() {
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        reject(err);
      } else {
        resolve('Conexión exitosa');
      }
    });
  });
}

module.exports = {
  connection,
  connectToDatabase,
}; */