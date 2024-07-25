const mssql = require('mssql');
const sqlConfig = require('../config/db');

exports.ConsultarLogin = async (params) => {
    try {
      console.log(params)
      const pool = await mssql.connect(sqlConfig);
      const result = await pool.request()
        .input('psSpSel', params.psSpSel)
        .input('psUser', '"'+params.psUser+'"')
        .input('psPass', '"'+params.psPass+'"')
        .execute('ConsultarLogin');
      return result.recordsets[0];
    } catch (err) {
      return err;
    }
  };

// exports.ConsultarLogin = async (params) => {
//   try {
//     // console.log('params')
//     console.log(params)

//     const pool = await mssql.connect(sqlConfig);
//     const result = await pool.request()
//       .input('psSpSel', params.psSpSel)
//     //   .input('psUser', params.psUser)
//     //   .input('psPass', params.psPass)
//       console.log('usuario:'+params.psUser)
//       console.log('pass:'+params.psUser)

//       .execute('ConsultarLigas');
      
//     return result.recordsets[0];
//   } catch (err) {
//     console.log('catch error 1')
//     console.log(err.message)
//     return err;
//   }
// };