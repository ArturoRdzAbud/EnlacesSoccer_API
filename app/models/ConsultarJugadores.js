const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarJugadores = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      //.input('pnActivo', params.pnActivo)
      .execute('ConsultarJugadores');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};