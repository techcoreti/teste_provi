'use strict'
const { Connection }    = require('../Connection/index')
const { configConnBD }  = require('../Config');
const connection        = new Connection();

const doGetCompaniesRelations = async (id) => {
    const conn = await connection.Connection();

    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: 'get-companies-relation',
            text: 'select t1.*' 
                + ' from ' + configConnBD.schema + '.companies as t1'
                + ' join ' + configConnBD.schema + '.companies_relation as t2'
                + ' on '
                + ' t2.id_filial = t1.id '
                + ' where '
                + ' t2.id_matriz = $1 order by t1.razaosocial',
            values: [
                id
            ]            
        };

        try{
            conn.query(Query).then(({ rows }) => {
                if(rows.length > 0){
                    resolve({ code: 200, rows: rows });
                }else{
                    resolve({ code: 204 })
                }
            }).catch(e => {
                reject({ code: 500, message: e.message });
            })
        }finally{
            conn.release();
        }
    });

    return promise;
}

module.exports = { doGetCompaniesRelations }