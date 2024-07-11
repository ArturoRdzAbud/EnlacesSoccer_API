const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarUsuario = async (body) => {
  try {
    console.log(body)
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdUsuario', body.pnIdUsuario)
      .input('psNombreUsuario', body.psNombreUsuario)
      .input('psCorreo', body.psCorreo)
      .input('pnIdPerfil', body.pnIdPerfil)
      .input('psLogin', body.psLogin)
      .input('psPassword', body.psPassword)
      .input('pnActivo', body.pnActivo)
      .input('pnAccion', body.pnAccion)
      .execute('GuardarUsuario');
    return result.recordsets[0];
  } catch (err) {
    // throw new Error(err.message);
    return err.message;
    // return result.err

  }
};