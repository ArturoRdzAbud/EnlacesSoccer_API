const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarUsuariosAdministradores = async (params) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .execute('ConsultarUsuariosAdministradores');
    return result.recordsets[0];
  } catch (err) {
    return err;
  }
};