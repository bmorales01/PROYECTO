const express = require('express');
const path = require('path');
const app = express();

//USUARIO
let usuarios = [
    { clave: 123, usuario: 'Luis' },
];
app.use(express.static(path.join(__dirname)));

// RUTA
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// RUTA INCIO SESION
app.get('/login', (req, res) => {
    const { usuario, clave } = req.query;
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.clave == clave);

    if (usuarioEncontrado) {
        res.status(200).send('Inicio sesión exitoso');
    } else {
        res.status(401).send('Usuario o clave incorrectos');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));