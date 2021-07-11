'use strict'
const axios                   = require('axios');
const { doPostAlbumsSpotify } = require('./database-albums');
const { configSpotify }       = require('../../Config');
const doGetAlbumsSpotify      = async (req) => {

    const config = {
      method    : 'get',
      url       : `https://api.spotify.com/v1/albums/${req.params.id_album}`,
      headers   : { 
        'Authorization': `Bearer ${configSpotify.token}` 
      }
    };

    try {
        const { data } = await axios(config);      
        try {
            if(data.name){
                const result = await doPostAlbumsSpotify(data);
                data.dataID  = result[0].id; // Acrescento o id do registro na base de dados
                return({ code: 200, message: data });
            }else{
                return({ code: 204, message: 'no result found' });
            }  
        } catch (err) {
           if(err.message.indexOf('unique constraint')){
                return({ code: err.code, message: data });
            }else{
                return({ code: err.code, message: err.message });
            }
        }
    }catch (err) {
        return({ code: err.response.status, message: err.response.statusText });
    }
    
}

module.exports = { doGetAlbumsSpotify };
