const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarJugadoresFoto = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnFotosn', params.pnFotosn)
      .input('pnIdLiga', params.pnIdLiga)
      .input('pnIdJugador', params.pnIdJugador)
      .execute('ConsultarJugadores');

    //const base64Data = result.recordsets[0].Fotografia.toString('base64');
    //console.log(base64Data.toString())
    //return base64Data
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};