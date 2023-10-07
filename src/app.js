const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000; 


app.use(express.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'isabalza',
  password: 'isma04528',
  database: 'rubricaweb',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});


app.use('/products', require('./routes/productRoutes'));
app.use('/sales', require('./routes/saleRoutes'));


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


router.get('/products', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
      if (err) {
        console.error('Error al consultar productos:', err);
        res.status(500).json({ error: 'Error al consultar productos' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  
app.use((err, req, res, next) => {
    console.error('Error en la aplicación:', err);
    res.status(500).json({ error: 'Error en el servidor' });
  });
  