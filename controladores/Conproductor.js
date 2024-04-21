const Modproductor = require('../modelos/Modproductor');

exports.addProductora = async (req, res) => {
    const producer = new Modproductor(req.body);
    await producer.save();

    res.status(201).json(producer);
};

exports.getAllProducers = async (req, res) => {
    const productoras = await Modproductor.find();

    res.status(200).json(productoras);

};

exports.productoraById = async (req, res) => {
    const productoras = await Modproductor.findById(req.params.id);
    
    res.status(200).json(productoras);

};

exports.upProducers = async (req, res) => {
    const idProductoras = req.params.id;
    const upProductora = req.body;

    const updateProducer = await Modproductor.findByIdAndUpdate(
       
         { _id: idProductoras },
          { $set: upProductora },
          { new: true }

    );

    res.status(200).json(updateProducer);
};

exports.delProducers = async (req, res) => {
    const idProducer = req.params.id;
    const deletedProducer = await Modproductor.findOneAndDelete(
        { _id: idProducer },
        { new: true }
    );
    res.status(200).json(deletedProducer);
};