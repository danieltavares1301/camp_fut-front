const express =require('express');
const routes=require('./routes');
const cors =require('cors')

require('./database')

const app=express();
app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(5500,()=>console.log('Servidor executando na  porta 5500'));