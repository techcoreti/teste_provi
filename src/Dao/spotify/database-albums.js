'use strict'

const { Connection } = require('../../Connection');
const connect        = new Connection();

const doPostAlbumsSpotify = async (context) => {
    const conn    = await connect.Connection();
    const promise = new Promise((resolv, reject) => {
        
        const Query = {
            name: 'post-spotify-albums',
            text: 'insert into spotify.artists_albums(id_album,album)values($1,$2) returning id',
    
            values : [
                context.uri,
                context
            ]
        }

        conn.query('begin').then(
            conn.query(Query)
                .then(e => { 
                    conn.query('commit')
                        .then(() => { 
                            resolv(e.rows)
                        })
                        .catch(e => {
                            conn.query('rollback')
                            reject({ code: 500, message: e.message })
                        })
                })
                .catch(e => { 
                    conn.query('rollback')
                    reject({ code: 500, message: e.message})
                })

        ).catch(e => {
            reject({ code: 500, message: e.message });
        })
    });

    return promise;

}

module.exports = { doPostAlbumsSpotify }