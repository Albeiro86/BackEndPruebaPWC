const { response } = require('express');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');


const login = async(req, res = response) => {

    const { nombre, password } = req.body;

    try {

        const usuarioDB = await Usuario.findOne({ nombre })
        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Nombre no valido'
            });
        }
        const passwordDB = await Usuario.findOne({ password })
        if (!passwordDB) {
            return res.status(404).json({
                ok: false,
                msg: 'password no valido'
            });
        }

        //generar token

        const token = await generarJWT(usuarioDB.id)

        res.json({
            ok: true,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al administrador'
        })

    }

}

module.exports = {
    login
}