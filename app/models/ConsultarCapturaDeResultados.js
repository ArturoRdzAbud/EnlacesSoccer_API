const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarCapturaDeResultados = async (params) => {
    try {
        // console.log('entra al try')
        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request()
            .input('pnIdLiga', params.pnIdLiga)
            .input('pnIdTorneo', params.pnIdTorneo)
            .input('pnIdJornada', params.pnIdJornada)
            .execute('ConsultarCapturaDeResultados');
        return result.recordsets[0];
    } catch (err) {
        console.log('entra al control de errores', err.message)
        return err;
    }
};