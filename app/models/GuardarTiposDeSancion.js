const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarTiposDeSancion = async (body) => {
  try {
    console.log(body)
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('pnIdTipoSancion', body.pnIdTipoSancion)
      .input('psClave', body.psClave)
      .input('psDescripcion', body.psDescripcion)
      .input('pnJuegosSuspension', body.pnJuegosSuspension)
      .input('pnCausaBaja', body.pnCausaBaja)
      .input('pnActivo', body.pnActivo)
      .input('pnAccion', body.pnAccion)
      .execute('GuardarTiposDeSancion');
    return result.recordsets[0];
  } catch (err) {
    console.log(err.message)
    return err;
  }
};