const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Base de Datos conectada a MongoDB');
});