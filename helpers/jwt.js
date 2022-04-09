const jwt = require('jsonwebtoken');

const generarJWT = (nombre) => {

    return new Promise((resolve, reject) => {

        const payload = {
            nombre,
        }

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(token);
            }

        });
    });

}

module.exports = {
    generarJWT,
}