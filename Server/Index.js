const express = require('express');
const server = express();
const PORT = 3001;
const router = express.Router();


server.listen(PORT, () => {
    server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header(
           'Access-Control-Allow-Headers',
           'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
           'Access-Control-Allow-Methods',
           'GET, POST, OPTIONS, PUT, DELETE'
        );
        next();
     });

     // Middleware para ejecutar express.json()
router.use(express.json());

// Middleware para agregar "/rickandmorty" antes de cada ruta
router.use('/rickandmorty', (req, res, next) => {
  req.baseUrl = '/rickandmorty';
  next();
});
    
   console.log('Server raised in port: ' + PORT);
});
