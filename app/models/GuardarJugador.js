const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.GuardarJugador = async (body) => {
  try {
    console.log(body)
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request()
      .input('pnIdLiga', body.pnIdLiga)
      .input('pnIdJugador', body.pnIdJugador)
      .input('psCurp', body.psCurp)
      .input('psNombre', body.psNombre)
      .input('pnNumero', body.pnNumero)
      .input('pnTelefono', body.pnTelefono)
      .input('pdFechaNacimiento', body.pdFechaNacimiento)
      .input('pnIdGenero', body.pnIdGenero)
      .input('psCorreo', body.psCorreo)
      .input('pnActivo', body.pnActivo)
      //.input('piFotografia', body.piFotografia)
      .input('pnAccion', body.pnAccion)
      .execute('GuardarJugadorNuevo');
    return result.recordsets[0];
  } catch (err) {
    console.log(err.message)
    return err;

  }
};