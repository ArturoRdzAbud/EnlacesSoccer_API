const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarConfiguracionAccesoLigas = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdUsuario', params.pnIdUsuario)
      .execute('ConsultarConfiguracionAccesoLigas');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};