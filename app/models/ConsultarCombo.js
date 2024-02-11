const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarCombo = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('psSpSel', params.psSpSel)
      .execute('ConsultarCombo');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};