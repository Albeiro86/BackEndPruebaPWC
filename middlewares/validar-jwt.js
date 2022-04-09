const jwt = require('jsonwebtoken');

const validarjwt = (req, res, next) => {

    //leer el token
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'no hay token en la peticion'
        });
    }

    try {
        const { nombre } = jwt.verify(token, process.env.JWT_SECRET);

        req.nombre = nombre;


    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'token no valido'
        });

    }

    next()

}

module.exports = {
    validarjwt
}