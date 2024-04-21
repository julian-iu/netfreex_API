const express = require('express')
require('./DB/database');
require('dotenv').config();
const Contipo = require('./rutas/Rtipo.js');
const Conproductor = require('./rutas/Rproducer.js');
const Conmedia = require('./rutas/Rmedia.js');
const Congenero = require('./rutas/Rgenero.js');
const Condirector = require('./rutas/Rdirector.js');


const app = express();
app.use(express.json());

async function main(){
    await app.listen(process.env.PORT);
    console.log(`conexion exitosa en ${process.env.PORT}, felicidades`)
}
app.get('/', (req, res) => {
    res.send('congratulation');
});
app.use('/tipo', Contipo);
app.use('/productor', Conproductor);
app.use('/media', Conmedia);
app.use('/genero', Congenero);
app.use('/director', Condirector);

main();
