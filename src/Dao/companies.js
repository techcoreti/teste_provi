'use strict'
const { commonsCnts }  = require('../Business/commons/constants');
const { configConnBD } = require('../Config');
const { Connection }   = require('../Connection')
const connect          = new Connection();

async function doGetCompanies(){
    const conn = await connect.Connection();

    const Query = {
        name : 'get-companies',
        text : 'select * from ' + configConnBD.schema + '.companies order by id'
    };

    const promise = new Promise((resolv,reject) =>{
        conn.query(Query)
            .then(({ rows }) => {
                if(rows.length > 0){
                    resolv({ code: 200, rows: rows });
                }else{
                    resolv({ code: 204 })
                }
            }).catch(() => {
                reject({ code: 500 })
            }).finally(() => {
                conn.release();
            })
    });

    return promise;
}

async function doPostCompany(fields){
    const conn = await connect.Connection();

    const promise = new Promise((resolve, reject) => {            
        const Query = {
            name: 'post-company',
            text: 'insert into ' + configConnBD.schema + '.companies('
                    + 'razaosocial,'
                    + 'nomefantasia,'
                    + 'cnpj,' 
                    + 'inscestadual,'
                    + 'inscmunicipal,' 
                    + 'cep,'
                    + 'logradouro,'
                    + 'numero,'
                    + 'complemento,' 
                    + 'bairro,' 
                    + 'municipio,'
                    + 'municipiocodigo,' 
                    + 'uf,'
                    + 'ufcodigo,'
                    + 'pais,'
                    + 'paiscodigo,'
                    + 'email,'
                    + 'site,'
                    + 'fonefixo,'
                    + 'fonemovel,'
                    + 'facebook,'
                    + 'linkedin,'
                    + 'whatsapp'
                    + ')values('  
                    + '$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23)',
            values: [   
                    fields.razaosocial,
                    fields.nomefantasia,
                    fields.cnpj,
                    fields.inscestadual,
                    fields.inscmunicipal,
                    fields.cep,
                    fields.logradouro,
                    fields.numero,
                    fields.complemento,
                    fields.bairro,
                    fields.municipio,
                    fields.municipiocodigo,
                    fields.uf,
                    fields.ufcodigo,
                    fields.pais,
                    fields.paiscodigo,
                    fields.email,
                    fields.site,
                    fields.fonefixo,
                    fields.fonemovel,
                    fields.facebook,
                    fields.linkedin,
                    fields.whatsapp
            ]
        };

        try{
            conn.query('begin').then(() => {
                conn.query(Query).then(() => {

                    conn.query('commit').then(() => {
                        resolve();
                    }).catch(e => {
                        conn.query('rollback');
                        reject({ code: 500, message: e.message })
                    })

                }).catch(e => {
                    conn.query('rollback');
                    if(e.message.indexOf('duplicate key') >= 0){
                        reject({ code: 500, message: commonsCnts.msgCnpjDuplicate })
                    }else{
                        reject({ code: 500, message: e.message })
                    }
                })
            }).catch(e => {
                conn.query('rollback');
                reject({ code: 500, message: e.message })
            });
        } finally {
            conn.release();
        }
    }); 
    return promise;  
}

async function doPutCompany(fields, id){
    const conn = await connect.Connection();

    const promise = new Promise((resolv,reject) => {
        const Query = {
            name: 'update-company',
            text: 'Update ' + configConnBD.schema +  '.companies '
                    + 'set ' 
                    + 'razaosocial      =$1,'
                    + 'nomefantasia     =$2,'
                    + 'inscestadual     =$3,'
                    + 'inscmunicipal    =$4,'
                    + 'cep              =$5,'
                    + 'logradouro       =$6,'
                    + 'numero           =$7,'
                    + 'complemento      =$8,'
                    + 'bairro           =$9,'
                    + 'municipio        =$10,'
                    + 'municipiocodigo  =$11,'
                    + 'uf               =$12,'
                    + 'ufcodigo         =$13,'
                    + 'pais             =$14,'
                    + 'paiscodigo       =$15,'
                    + 'email            =$16,'
                    + 'site             =$17,'
                    + 'fonefixo         =$18,'
                    + 'fonemovel        =$19,'
                    + 'facebook         =$20,'
                    + 'linkedin         =$21,'
                    + 'whatsapp         =$22,'
                    + 'status           =$23'
                    + ' where '
                    + 'id               =$24',
            values : [   
                    fields.razaosocial,
                    fields.nomefantasia,
                    fields.inscestadual,
                    fields.inscmunicipal,
                    fields.cep,
                    fields.logradouro,
                    fields.numero,
                    fields.complemento,
                    fields.bairro,
                    fields.municipio,
                    fields.municipiocodigo,
                    fields.uf,
                    fields.ufcodigo,
                    fields.pais,
                    fields.paiscodigo,
                    fields.email,
                    fields.site,
                    fields.fonefixo,
                    fields.fonemovel,
                    fields.facebook,
                    fields.linkedin,
                    fields.whatsapp,
                    fields.status,
                    id
            ]      
        }

        try{
            conn.query('begin').then(() => {
                conn.query(Query).then(() => {
                    conn.query('commit').then(() => {
                        resolv()
                    }).catch(e => {
                        conn.query('rollback');
                        reject({ code: 500, message: e.message })
                    });
                }).catch(e => {
                    conn.query('rollback');
                    reject({ code: 500, message: e.message })
                });
            }).catch(e => {
                reject({ code: 500, message: e.message })
            });
        }finally{
            conn.release();
        }            
    }); 
    return promise;
}

async function doDeleteCompany(id){
    const conn = await connect.Connection();

    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: 'delete-company',
            text: 'delete from ' + configConnBD.schema + '.companies where id = $1',
            values : [
                id
            ]
        }

        try{
            conn.query('begin').then(() => {
                conn.query(Query).then(() => {
                    conn.query('commit').then(() => {
                        resolve({ code: 204 })
                    }).catch(e => {
                        conn.query('rollback');
                        reject({ code: 500, message: e.message })
                    });
                }).catch(e => {
                    conn.query('rollback');
                    reject({ code: 500, message: e.message })
                })
            }).catch(e => {
                reject({ code: 500, message: e.message })
            });
        } finally {
            conn.release();
        }
    })

    return promise;
}

async function doGetContactsCompanies(id){
    const conn = await connect.Connection();
    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: "get-companies-contacts",
            text: 'select t2.id_company as id_r, t1.* from ' 
                    + configConnBD.schema + '.companies_contacts as t1'
                    + ' join ' 
                    + configConnBD.schema + '.companies_contacts_relation as t2'
                    + ' on '
                    + ' t2.id_contact = t1.id'
                    + ' where '
                    + ' t2.id_company = $1 order by t1.datacadastro',
            values: [
                id
            ]
        };

        try{
            conn.query(Query).then(({ rows }) => {
                if(rows.length > 0){
                    resolve({ code: 200, rows: rows });
                }else{
                    resolve({ code: 204})
                }
            }).catch(e => {
                reject({ code: 500, message: e.message})
            })
        }finally{
            conn.release();
        }
    });
    return promise;
} 

async function doPostContactsCompanies(fields, id){
    const conn = await connect.Connection();

    const promise = new Promise((resolve, reject) => {
        const Query = {
            name : 'post-companies-contacts',
            text : 'insert into ' + configConnBD.schema + '.companies_contacts('
                                        + 'nome,'
                                        + 'apelido,'
                                        + 'departamento,'
                                        + 'setor,'
                                        + 'fonefixo,'
                                        + 'ramal,' 
                                        + 'fonemovel,'
                                        + 'facebook,'
                                        + 'linkedin,' 
                                        + 'whatsapp,'
                                        + 'email,'
                                        + 'observacao'                                            
                                        + ')values('  
                                        + '$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)' 
                                        + ' returning id',
            values :  [   
                    fields.nome,
                    fields.apelido,
                    fields.departamento,
                    fields.setor,
                    fields.fonefixo,
                    fields.ramal,
                    fields.fonemovel,
                    fields.facebook,
                    fields.linkedin,
                    fields.whatsapp,
                    fields.email,
                    fields.observacao
            ]
        };

        try {
            conn.query('begin').then(() => {
                conn.query(Query).then(({ rows }) => {

                    doPostCompaniesContactsRelation(id, rows[0].id).then(() => {
                        conn.query('commit').then(() => {
                            resolve();
                        }).catch(e => {
                            conn.query('rollback');
                            reject({ code: 500, message: e.message })
                        });
                    }).catch(e => {
                        conn.query('rollback');
                        reject({ code: 500, message: e.message });
                    });

                }).catch(e => {
                    conn.query('rollback');
                    reject({ code: 500, message: e.message });
                });
            }).catch(e => {
                reject({ code: 500, message: e.message });
            });
        } finally {
            conn.release()
        }
    });  
    return promise;
}

async function doPostCompaniesContactsRelation(id,id_contact){
    const conn = await connect.Connection();

    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: 'post-companies-contacts-relation',
            text: 'insert into ' + configConnBD.schema + '.companies_contacts_relation('
                                 + '    id_company,'
                                 + '    id_contact'
                                 + ')values('
                                 + '    $1,'
                                 + '    $2)',
            values : [
                id,
                id_contact
            ]
        }

        try{
            conn.query(Query, (err) => {
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            });
        } finally {
            conn.release()
        }
    });
    return promise;
}

async function doPutContactsCompanies(fields,id){
    const conn = await connect.Connection().catch(e => {
        return Promise.reject({ code: 500, message: e.message })
    });

    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: 'put-companies-contacts',
            text: 'update ' + configConnBD.schema + '.companies_contacts set '
                    + 'nome         = $1,'
                    + 'apelido      = $2,'
                    + 'departamento = $3,'
                    + 'setor        = $4,'
                    + 'fonefixo     = $5,' 
                    + 'ramal        = $6,'
                    + 'fonemovel    = $7,' 
                    + 'facebook     = $8,'
                    + 'linkedin     = $9,'
                    + 'whatsapp     = $10,'
                    + 'email        = $11,'
                    + 'observacao   = $12'
                    + ' where '
                    + ' id          = $13',
            values: [
                fields.nome,
                fields.apelido,
                fields.departamento,
                fields.setor,
                fields.fonefixo,
                fields.ramal,
                fields.fonemovel,
                fields.facebook,
                fields.linkedin,
                fields.whatsapp,
                fields.email,
                fields.observacao,
                id
            ]
        }

        try{
            conn.query('begin').then(() => {
                conn.query(Query).then(() => {
                    conn.query('commit').then(() => {
                        resolve();
                    }).catch(e => {
                        conn.query('rollback');
                        reject({ code: 500, message: e.message })
                    });
                }).catch(e => {
                    conn.query('rollback');
                    reject({ code: 500, message: e.message });
                });
            }).catch(e => {
                reject({ code: 500, message: e.message })
            });
        }finally{
            conn.release();
        }
    });
    return promise;
}

async function doDeleteContactsCompanies(id){
    const conn = await connect.Connection().catch(e => {
        return Promise.reject({ code: 500, message: e.message })
    });

    const promise = new Promise((resolve,reject) => {
        const Query = {
            name   : 'delete-companies-contacts',
            text   : 'delete from ' + configConnBD.schema + '.companies_contacts where id = $1',
            values : [ id ]
        };

        try{
            conn.query('begin').then(() => {
                conn.query(Query).then(() => {
                    conn.query('commit').then(() => {
                        resolve();
                    }).catch(e => {
                        reject({ code: 500, message: e.message })
                    });
                }).catch(e => {
                    conn.query('rolback');
                    reject({ code: 500, message: e.message })
                });
            }).catch(e => {
                reject({ code: 500, message: e.message })
            });
        }finally{
            conn.release();
        }
    });

    return promise
}

module.exports = { 
    doGetCompanies, 
    doPostCompany, 
    doPutCompany, 
    doDeleteCompany, 
    doGetContactsCompanies, 
    doPostContactsCompanies, 
    doPutContactsCompanies, 
    doDeleteContactsCompanies

}