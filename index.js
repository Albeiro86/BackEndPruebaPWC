const express = require('express');
require('dotenv').config();
const cors = require('cors');


const { dbConnection } = require('./database/config');

// crear el servidor de express
const app = express();

//configurar cors para admitir varios tipos de petiociones http
app.use(cors());

//base de datos
dbConnection();

// userBD: PruebaPWC
// passwordBD: stg0JghBcL8kOIna

//rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'hola mundo'
    });
});

app.listen(process.env.PORT, () => {

    console.log('servidor corriendo en pueto ' + process.env.PORT);
});