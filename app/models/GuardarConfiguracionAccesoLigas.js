const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarConfiguracionAccesoLigas = async (body) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdUsuario', body.pnIdUsuario)
      .input('psXmlConfiguraAccesoLigas', body.psXmlConfiguraAccesoLigas)
      .execute('GuardarConfiguracionAccesoLigas');
    //return result.recordsets[0];
  } catch (err) {
    console.log('entra al control de errores', err.message)
    return err.message;
  }
};