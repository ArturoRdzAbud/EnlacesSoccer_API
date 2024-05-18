const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GenerarCalendario = async (body) => {
  try {
    console.log(body)
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('pnIdTorneo', body.pnIdTorneo)
      .execute('GenerarCalendario');
    return result.recordsets[0];
  } catch (err) {
    console.log(err.message)
    // return err;
    throw new Error(err.message);
  }
};