const { Router } = require('express');
const { login } = require('../controlers/auth');
// const { check } = require('express-validator');

const router = Router();


router.post('/', [

        // check('nombre', 'el nombre es obligatorio').not().isEmpty(),
        // check('password', 'el password es obligatorio').not().isEmpty(),

    ],
    login
)



module.exports = router;