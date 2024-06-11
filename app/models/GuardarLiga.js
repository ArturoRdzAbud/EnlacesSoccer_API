const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarLiga = async (body) => {
  try {
    console.log(body)
    const pool = await mssql.connect(sqlConfig);

    // console.log(body.pnIdLiga)

    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('psNombre', body.psNombre)
      .input('psRepresentante', body.psRepresentante)
      .input('psTelefono', body.psTelefono)
      .input('psCorreo', body.psCorreo)
      .input('pnIdPais', body.pnPais)
      .input('pnIdEstado', body.pnEstado)
      .input('pnIdMunicipio', body.pnMunicipio)
    //   .input('pnActivo', body.pnActivo)
      .input('pnActiva', body.pnActivo)
      .input('pnAccion', body.pnAccion)
      .execute('GuardarLiga');


    return result.recordsets[0];
  } catch (err) {
    console.log(err.message)
    // return err;
    return err.message;
    
  }
};