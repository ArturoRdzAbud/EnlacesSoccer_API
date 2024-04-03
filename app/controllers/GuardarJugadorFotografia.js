//const model = require('../models/GuardarJugadorFotografia');
const mssql = require('mssql');
const sqlConfig = require('../config/db');
const multer = require('multer');

// Configuración de multer para manejar el almacenamiento de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//upload.single('piFotografia'),

exports.post = async (req, res) => {
    //const pool = 
    await mssql.connect(sqlConfig);
    console.log('Ya esta en BDD')
    //console.log(pool.)
    //const body = req.body.data;
    //const data = await model.GuardarJugadorFotografia(body);
    //const pnIdJugador = body.pnIdJugador
    //console.log(pnIdJugador)
    console.log(req.file)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.setHeader("Content-Type", "multipart/form-data");
    res.json(data);
    res.send('Termina')
};
