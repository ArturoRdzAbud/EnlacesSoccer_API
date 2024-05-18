const express = require('express');
const router = express.Router();
const passport = require('passport');
const mssql = require('mssql');
const sqlConfig = require('../config/db');
const multer = require('multer');

// Configuración de multer para manejar el almacenamiento de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const consultarEquipos = require('../controllers/ConsultarEquipos');
const consultarEstados = require('../controllers/ConsultarEstados');
const consultarGrid = require('../controllers/ConsultarGrid');
const consultarCombo = require('../controllers/ConsultarCombo');
const consultarLigas = require('../controllers/ConsultarLigas');
const consultarMunicipios = require('../controllers/ConsultarMunicipios');
const consultarPaises = require('../controllers/ConsultarPaises');
const consultarTorneos = require('../controllers/ConsultarTorneos');
const guardarTorneo = require('../controllers/GuardarTorneo');
const consultarTiposDeTorneo = require('../controllers/ConsultarTiposDeTorneo');
const consultarDiasSemana = require('../controllers/ConsultarDiasSemana');
const defaultRoute = require('../controllers/DefaultController');
const guardarGrid = require('../controllers/GuardarGrid');
const guardarEquipo = require('../controllers/GuardarEquipo');
const guardarArbitro = require('../controllers/GuardarArbitro');
const ConsultarTiposDeSancion = require('../controllers/ConsultarTiposDeSancion');
const guardarTiposDeSancion = require('../controllers/GuardarTiposDeSancion');
const ConsultarArbitros = require('../controllers/ConsultarArbitros');
const consultarProgramacionDePartidos = require('../controllers/ConsultarProgramacionDePartidos');
const guardarProgramacionDePartidos = require('../controllers/GuardarProgramacionDePartidos');
const consultarJugadores = require('../controllers/ConsultarJugadores');
const guardarJugador = require('../controllers/GuardarJugador');
const generarCalendario = require('../controllers/GenerarCalendario');
const GuardarJugadorxEquipo = require('../controllers/GuardarJugadorxEquipo');
const consultarCapturaDeResultados = require('../controllers/ConsultarCapturaDeResultados');
const guardarCapturaDeResultados = require('../controllers/GuardarCapturaDeResultados');
const consultarJugadoresEquipo = require('../controllers/ConsultarJugadoresEquipo');
const consultarEstadisticaPorEquipo = require('../controllers/ConsultarEstadisticaPorEquipo');
const guardarLiga = require('../controllers/GuardarLiga');

const consultarJugadoresFoto = require('../controllers/ConsultarJugadoresFoto');

const login = require('../auth/controllers/login');
const validsession = require('../auth/controllers/validsession');
// const { GuardarJugadorxEquipo } = require('../models/GuardarJugadorxEquipo');



router.get('/ConsultarEquipos', consultarEquipos.get);
router.get('/ConsultarEstados', consultarEstados.get);
router.get('/ConsultarGrid', consultarGrid.get);
router.get('/ConsultarCombo', consultarCombo.get);
router.get('/ConsultarLigas', consultarLigas.get);
router.get('/ConsultarMunicipios', consultarMunicipios.get);
router.get('/ConsultarPaises', consultarPaises.get);
router.get('/ConsultarTorneos', consultarTorneos.get);
router.get('/ConsultarTiposDeTorneo', consultarTiposDeTorneo.get);
router.get('/ConsultarDiasSemana', consultarDiasSemana.get);
router.get('/ConsultarTiposDeSancion', ConsultarTiposDeSancion.get);
router.get('/ConsultarArbitros', ConsultarArbitros.get);
router.get('/ConsultarProgramacionDePartidos', consultarProgramacionDePartidos.get);
router.get('/ConsultarJugadores', consultarJugadores.get);
router.get('/ConsultarCapturaDeResultados', consultarCapturaDeResultados.get);
router.get('/ConsultarJugadoresEquipo', consultarJugadoresEquipo.get);
router.get('/ConsultarEstadisticaPorEquipo', consultarEstadisticaPorEquipo.get);


router.get('/ConsultarJugadoresFoto', consultarJugadoresFoto.get);

router.get('/', defaultRoute.get);
router.post('/GuardarGrid', guardarGrid.post);
router.post('/GuardarEquipo', guardarEquipo.post);
router.post('/GuardarTiposDeSancion', guardarTiposDeSancion.post);
router.post('/GuardarArbitro', guardarArbitro.post);
router.post('/GuardarProgramacionDePartidos', guardarProgramacionDePartidos.post);
router.post('/GuardarTorneo', guardarTorneo.post);
router.post('/GuardarJugador', guardarJugador.post);
router.post('/GenerarCalendario', generarCalendario.post);
router.post('/GuardarJugadorxEquipo', GuardarJugadorxEquipo.post);
router.post('/GuardarCapturaDeResultados', guardarCapturaDeResultados.post);
router.post('/GuardarLiga', guardarLiga.post);

router.post('/login', login.post);
router.get('/validsession', passport.authenticate('jwt', { session: false }), validsession.get);



// Ruta para manejar la carga de imágenes
router.post('/GuardarJugadorFotografia', upload.single('foto'), async (req, res) => {
    try {
        //console.log(req.body)
        const pool = await mssql.connect(sqlConfig);
        const request = pool.request()
        console.log(req.body.pnIdLiga)
        console.log(req.body.pnIdJugador)
        console.log('mensaje del server')

        // Guardar la imagen en la base de datos
        const image = req.file.buffer;
        const idLiga = req.body.pnIdLiga;
        const idJugador = req.body.pnIdJugador;




        request.input('image', mssql.VarBinary, image); // Declara el parámetro @image y asigna el valor 'image'
        request.input('idLiga', mssql.Int, idLiga)
        request.input('idJugador', mssql.Int, idJugador)
        // console.log('etapa intermedia')
        await request.query('UPDATE dbo.Jugador SET FechaUltimaMod=Getdate(), Fotografia = @image where IdJugador = @idJugador AND IdLiga = @idLiga');

        res.status(200).send('Imagen subida correctamente');
        // return request.recordsets[0];


    } catch (error) {
        console.error('Error al subir la imagen:', error);
        res.status(500).send('Error al subir la imagen');
    }
});


module.exports = router;