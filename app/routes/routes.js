const express = require('express');
const router = express.Router();
const passport = require('passport');


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

const login = require('../auth/controllers/login');
const validsession = require('../auth/controllers/validsession');



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

router.get('/', defaultRoute.get);
router.post('/GuardarGrid', guardarGrid.post);
router.post('/GuardarEquipo', guardarEquipo.post);
router.post('/GuardarTiposDeSancion', guardarTiposDeSancion.post);
router.post('/GuardarArbitro', guardarArbitro.post);
router.post('/GuardarProgramacionDePartidos', guardarProgramacionDePartidos.post);
router.post('/GuardarTorneo', guardarTorneo.post);

router.post('/login', login.post);
router.get('/validsession', passport.authenticate('jwt', { session: false }), validsession.get);

module.exports = router;