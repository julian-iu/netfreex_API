const Modtipo = require('../modelos/Modtipo'); 
exports.createTipo = async (req, res) => {
    const tipo = new Modtipo(req.body);
    await tipo.save();



    res.status(200).json(tipo);  
}

exports.getAllTipo  = async (req, res) => {
    const tipos = await Modtipo.find();

    res.status(201).json(tipos);
}

//se crea la funcion controlador para obtener tipos por el id que genera la BD mongo.
exports.tipoById = async (req, res) => {
    const tipo = await Modtipo.findById(req.params.id);

    res.status(201).json(tipo);
}

exports.upData = async (req, res) => {
    const tipoId = req.params.id;
    const updateData = req.body;
    
    const updateTipo = await Modtipo.findByIdAndUpdate(
        { _id: tipoId },
        {$set: updateData},
        {new: true}
    );
    res.status(201).json(updateTipo);
}

exports.delData = async (req, res) => {
    const idTipos = req.params.id;
    const borrartipo = await Modtipo.findOneAndDelete(
        { _id: idTipos },
        { new: true }
    );
    res.status(201).json(borrartipo);
};