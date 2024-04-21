const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
        unique: true
    },

    estado: {
        type: String,
        default: 'Activo'
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    },

    fechaActualizacion: {
        type: Date,
        default: Date.now
    },

    slogan: String,

    descripcion: String
});

module.exports = mongoose.model('Modproductor', producerSchema);