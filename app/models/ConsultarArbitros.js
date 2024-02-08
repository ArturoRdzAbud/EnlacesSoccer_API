const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarArbitros = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', params.pnIdLiga)
      .input('nActivo', params.nActivo)
      .execute('ConsultarArbitros');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};