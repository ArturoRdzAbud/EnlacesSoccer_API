const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarTiposDeSancion = async (params) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request()
            .input('pnIdLiga', params.pnIdLiga)
            .execute('ConsultarTiposDeSancion');
        return result.recordsets[0];
    } catch (err) {
        return err;
    }
};