const { Router } = require('express');
const { getUsuarios, crearUsuario } = require('../controlers/usuarios');
const { validarjwt } = require('../middlewares/validar-jwt');

const router = Router();


router.get('/', validarjwt, getUsuarios);

router.post('/', crearUsuario);


module.exports = router;