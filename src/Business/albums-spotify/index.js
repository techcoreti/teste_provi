'use strict'
const { spotify }  = require('../commons/constants');

const albumsSpotifyBusiness = (req,res,next) => {

    const { params, method } = req;

    if(method != 'GET'){
        res.status(400).send(spotify.msgErrorMethod);
        return;
    }
    
    if(!params){
        res.status(400).send(spotify.msgErrorRequest);
        return;
    }

    if(!params.id_album){
        res.status(400).send(spotify.msgErrorParams)
    }else{
        next();
    }
}

module.exports = { albumsSpotifyBusiness };