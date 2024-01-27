const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarEquipo = async (body) => {
  try {
    console.log(body)
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('pnIdTorneo', body.pnIdTorneo)
      .input('pnIdEquipo', body.pnIdEquipo)
      .input('psNombre', body.psNombre)
      .input('pnActivo', body.pnActivo)
      .input('pnAccion', body.pnAccion)
      .execute('GuardarEquipo');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};