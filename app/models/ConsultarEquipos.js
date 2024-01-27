const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarEquipos = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      //.input('pnIdLiga', params.pnIdLiga)  
      .input('pnActivo', params.pnActivo)
      .execute('ConsultarEquipos');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};