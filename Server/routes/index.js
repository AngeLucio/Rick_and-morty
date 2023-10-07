// Importa los controladores
const getCharById = require("../Controllers/getCharById");
const login = require('../Controllers/login');
const { postFav, deleteFav } = require('../Controllers/handleFavorites');
const express = require('express');
const router = express.Router()
// Rutas y controladores
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;
