const Modgenero = require('../modelos/Modgenero');
exports.newGenero = async (req, res) => {
    const genero = new Modgenero(req.body);
    await Modtipo.save();

    res.status(201).json(genero);
};

exports.getAllGeneros = async (req, res) => {
    const genero = await Modgenero.find();

    res.status(200).json(genero);
};

exports.generoById = async (req, res) => {
    const gene = await Modgenero.findById(id);
    
    res.status(200).json(gene);
}

exports.upDataG = async (req, res) => {
    const generoId = req.params.id;
    const updatedData = req.body;

    const updateGenero = await Modgenero.findByIdAndUpdate(
        {_id: generoId},
        {$set: updatedData},
        {new: true}
    );
    
    res.status(200).json(updateGenero);
};

exports.delDataG = async (req, res) => {
    const generoID = req.params.id;
    const deletedGenero = await Modgenero.findOneAndDelete(
        {_id: generoID},
        {new: true}
    );

    res.status(200).json(deletedGenero);
};