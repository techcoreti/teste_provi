'use strict'
require('dotenv').config({
    path: process.env.NODE_DEV == 'production' ? '.env.production' : '.env'
});

const configAPI = {
    secretToken : process.env.SECRET_KEY,
    port        : process.env.SRV_PORT,
    name        : 'BackOffice API.',
};

const configSpotify = {
    token : process.env.SPT_TOKEN,
}

const configConnBD = {
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORTA,
    user     : process.env.DB_USUARIO,
    password : process.env.DB_SENHA,
    database : process.env.DB_DATABASE,    
    schema   : process.env.DB_SCHEMA,    
};
    
// Aplicar regras de validação, exemplo (descriptografia dos dados antes da conexão)
//--

module.exports = { configAPI, configSpotify, configConnBD };