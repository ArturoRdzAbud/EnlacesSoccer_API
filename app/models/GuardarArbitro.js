const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarArbitro = async (body) => {
  try {
    console.log(body)
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('pnIdArbitro', body.pnIdArbitro)
      .input('psNombre', body.psNombre)
      .input('psTelefono', body.psTelefono)
      .input('psCurp', body.psCurp)
      .input('pnActivo', body.pnActivo)
      .input('pnAccion', body.pnAccion)
      .execute('GuardarArbitro');
    return result.recordsets[0];
  } catch (err) {
    console.log(err.message)
    return err;
    
  }
};