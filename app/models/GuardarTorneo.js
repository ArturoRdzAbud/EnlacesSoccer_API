const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarTorneo = async (body) => {
  try {
    console.log(body)
    const pool = await mssql.connect(sqlConfig);

    // console.log(body.pnIdLiga)

    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('pnIdTorneo', body.pnIdTorneo)
    //   .input('pnIdEquipo', body.pnIdEquipo)
        .input('pnIdTipoTorneo', body.pnIdTipoTorneo)
        .input('psHorarioInicio', body.psHorarioInicio)
        .input('psHorarioFin', body.psHorarioFin)
        .input('pnEsEditarEquipos', body.pnEsEditarEquipos)
        .input('psXmlEquipos', body.psXmlEquipos)

      .input('psNombre', body.psNombre)
      .input('pnActivo', body.pnActivo)
      .input('pnAccion', body.pnAccion)
      .execute('GuardarTorneo');
    return result.recordsets[0];
  } catch (err) {
    console.log(err.message)
    return err;
    
  }
};