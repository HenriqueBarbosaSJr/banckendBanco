const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3344, console.log('Servidor ON na porta 3344'));
