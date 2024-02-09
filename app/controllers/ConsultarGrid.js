const model = require('../models/ConsultarGrid');
const url = require('url');

exports.get = async (req, res) => {
    const params = url.parse(req.url, true).query;
    // console.log(params)
    const data = await model.ConsultarGrid(params);
    //console.log(data)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('content-type', 'application/json; charset=utf-8');
    res.json(data);
};
