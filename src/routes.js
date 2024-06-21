const express = require('express');
const controllerProd = require('./controllers/controllerProd');
const controllerComp = require('./controllers/controllerComp');

const routes = express.Router();

routes.get('/produtos', controllerProd.prodsGeral);
routes.get('/produtosnome/:nome', controllerProd.prodsNome);
routes.post('/produtos',controllerProd.createProd);
routes.put('/produtos/:cod', controllerProd.updateProd);
routes.delete('/produtos/:cod', controllerProd.deleteProd);

// Rotas das compras

routes.post('/compra',controllerComp.createComp);
routes.get('/compras', controllerComp.searchComp);
routes.get('/comprascod/:codcomp', controllerComp.searchCompCod);
module.exports = routes;