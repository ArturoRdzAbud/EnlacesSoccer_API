const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarJugadorFotografia = async (body) => {
  try {
    console.log(body)
    const pool = await mssql.connect(sqlConfig);
    console.log('Ya esta en BDD')

  } catch (err) {
    console.log(err.message)
    return err.message;

  }
};