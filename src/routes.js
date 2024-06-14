const express = require('express');
const controllerProd = require('./controllers/controllerProd');
const controllerComp = require('./controllers/controllerComp');

const routes = express.Router();

routes.get('/produtos', controllerProd.prodsGeral);
routes.post('/produtos',controllerProd.createProd);
routes.put('/produtos/:cod', controllerProd.updateProd);
routes.delete('/produtos/:cod', controllerProd.deleteProd);

// Rotas das compras

routes.post('/compra',controllerComp.createComp);


module.exports = routes;