const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarCapturaDeResultados = async (body) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('pnIdTorneo', body.pnIdTorneo)
      .input('pnIdJornada', body.pnIdJornada)
      .input('psXmlResultados1', body.psXmlResultados1)
      .input('psXmlResultados2', body.psXmlResultados2)
      .execute('GuardarCapturaDeResultados');
    //return result.recordsets[0];
  } catch (err) {
    console.log('entra al control de errores', err.message)
    return err;
  }
};