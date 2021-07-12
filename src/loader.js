'use strict'

const express       = require('express');
const server        = express();
const cors          = require('cors');
const helmet        = require('helmet')
const { configAPI } = require('./Config');
const Routes        = require('./Routes/routes');
const routes        = new Routes();

const options = {
    origin               : '*',
    methods              : ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    optionsSuccessStatus : 200
}

server.use(express.json({limit: '20mb'}));
server.use(express.urlencoded({extended:true, limit: '20mb'}));
server.use(cors(options));
server.use(helmet());
server.use(routes.routes);

server.listen(configAPI.port, () => {
    console.log(`Servidor inicializado na porta: ${configAPI.port}`)
});