const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarJugadores = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnFotosn', params.pnFotosn)
      .input('pnIdLiga', params.pnIdLiga)
      .input('pnIdJugador', params.pnIdJugador)
      .execute('ConsultarJugadores');
    //const base64Data = result.recordsets[0].toString('base64');
    //return base64Data
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};