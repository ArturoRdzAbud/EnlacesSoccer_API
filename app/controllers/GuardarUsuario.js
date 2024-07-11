const model = require('../models/GuardarUsuario');
//const multer = require('multer');

// Configuración de multer para manejar el almacenamiento de archivos
//const storage = multer.memoryStorage();
//const upload = multer({ storage: storage });

exports.post = async (req, res) => {
    const body = req.body.data;
    const data = await model.GuardarUsuario(body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.json(data);
};
