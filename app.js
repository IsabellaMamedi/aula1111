const express = require('express');
const userControler = require('./Controlers/userControler');
const bodyParser = require('body-parser');
const app = express();

//Configura o EJS  como mecanismo de visialização
app.set('view engine','ejs');

//Middleware para parsing do body
app.use(bodyParser.urlencoded({ extend: false}));

//Rotas
app.get('/', userControler.getAllUsers);

//Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});