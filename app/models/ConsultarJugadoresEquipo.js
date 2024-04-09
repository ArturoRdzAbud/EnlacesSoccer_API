const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarJugadoresEquipo = async (params) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request()
            .input('pnIdLiga', params.pnIdLiga)
            .input('pnIdTorneo', params.pnIdTorneo)
            .input('pnIdJornada', params.pnIdJornada)
            .input('pnIdEquipo', params.pnIdEquipo)
            .execute('ConsultarJugadoresEquipo');
        return result.recordsets[0];
    } catch (err) {
        return err;
    }
};