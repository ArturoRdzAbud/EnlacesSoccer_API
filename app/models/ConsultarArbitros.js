const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarArbitros = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    console.log(params, pool)
    const result = await pool.request()
      .input('pnIdLiga', params.pnIdLiga)
      .input('pnActivo', params.pnActivo)
      .execute('ConsultarArbitros');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};