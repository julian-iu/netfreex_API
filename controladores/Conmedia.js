const Modmedia = require('../modelos/Modmedia');


exports.addmedia = async (req, res) => {
    const media = new Modmedia(req.body);
    await media.save();

    res.status(200).json(media);
};

exports.getAllMedia = async (req, res) => {
    const getMedia = await Modmedia.find();
   

    res.status(200).json(getMedia);

};

exports.mediaById = async (req, res) => {
    const mediaId = await Media.findById(req.params.id);

    res.status(200).json(mediaId);
};

exports.upMedia = async (req, res) => {
    const id = req.params.id;
    const updatedMedias =  req.body;

    const updatedMedia = await Modmedia.findByIdAndUpdate(
        {_id: id},
        {$set: updatedMedias},
        {new: true}
    );

    res.status(200).json(updatedMedia);
    
};

exports.delMedia = async (req, res) => {
    const idDelMedia = req.params.id;
    const delMedia = await Modmedia.findOneAndDelete(
        {_id: idDelMedia},
        {new: true}
    );

    res.status(200).json(delMedia);
};
