const express = require('express');

const routes = express.Router();

routes.get('/users/', (request, response) => {

    const body = request.body;
    console.log(body);
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Gabriel Pereira Ribeiro'
    });
});


module.exports = routes;