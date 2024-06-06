const express = require('express');
const controllerProd = require('./controllers/controllerProd');

const routes = express.Router();

routes.get('/produtos', controllerProd.prodsGeral);
routes.post('/produtos',controllerProd.createProd);
routes.put('/produtos/:cod', controllerProd.updateProd);
routes.delete('/produtos/:cod', controllerProd.deleteProd);


module.exports = routes;