const model = require('../models/DefaultModel');

exports.get = async (req, res) => {
    const data = await model.DefaultModel;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('content-type', 'text/plain');
    res.send(data);
};