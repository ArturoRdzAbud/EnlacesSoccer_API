const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarEstados = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnActivo', params.pnActivo)
      .input('pnIdPais', params.pnIdPais)
      .execute('ConsultarEstados');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};