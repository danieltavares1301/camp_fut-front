const express= require('express');
const CampController= require('./controllers/CampController');
const ConfrontosController = require('./controllers/ConfrontosController');
const TimesController =require('./controllers/TimesController');

const routes=express.Router();

routes.post('/', (req, res) => res.render("/src/index"))
// rota de times
routes.get('/times',TimesController.indexall);
routes.get('/camps/:FkIDCampeonato/times',TimesController.index);
routes.get('/:Time/times',TimesController.indexbyId);
routes.post('/camps/:FkIDCampeonato/times',TimesController.store);
//rota de campeonatos
routes.get('/camps',CampController.index);
routes.get('/camps/:id',CampController.indexId);
routes.post('/camps',CampController.store);
//rotas de confrontos
routes.put('/camps/:id/Confr',ConfrontosController.update);
routes.get('/Confr',ConfrontosController.index);
routes.post('/camps/:FkIDCampeonato/Confr',ConfrontosController.store);
routes.delete('/camps/:id/Confr',ConfrontosController.delete);
module.exports= routes;