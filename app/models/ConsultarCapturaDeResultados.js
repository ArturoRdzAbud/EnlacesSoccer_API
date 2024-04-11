const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarCapturaDeResultados = async (params) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request()
            .input('pnIdLiga', params.pnIdLiga)
            .input('pnIdTorneo', params.pnIdTorneo)
            .input('pnIdJornada', params.pnIdJornada)
            .execute('ConsultarCapturaDeResultados');
        return result.recordsets[0];
    } catch (err) {
        return err;
    }
};