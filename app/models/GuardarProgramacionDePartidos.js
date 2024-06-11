const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarProgramacionDePartidos = async (body) => {
  try {
    console.log(body)
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('pnIdTorneo', body.pnIdTorneo)
      .input('pnIdJornada', body.pnIdJornada)
      .input('pnIdEquipo1', body.pnIdEquipo1)
      .input('pnIdEquipo2', body.pnIdEquipo2)
      .input('pnProgramado', body.pnProgramado)
      .input('ptFechaHora', body.ptFechaHora)
      .execute('GuardarProgramacionDePartidos');
    return result.recordsets[0];
  } catch (err) {
    console.log(err.message)
    return err.message;
  }
};