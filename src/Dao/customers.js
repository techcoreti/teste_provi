'use strict'
const { Connection }   = require('../Connection')
const { configConnBD } = require('../Config');
const { commonsCnts }  = require('../Business/commons/constants')
const connect          = new Connection();

async function doGetCustomers(id_comp){
    const conn = await connect.Connection().catch(e => {
        return Promise.reject({ code: 500, message: e.message })
    });

    const promise = new Promise((resolve, reject) => {
        const Query = {
            name: 'get-customers',
            text: 'select t2.id as id_R, t1.*'
                + ' from ' + configConnBD.schema + '.customers as t1 ' 
                + ' join ' + configConnBD.schema + '.customers_companies_relation as t2 '
                + ' on t2.id_customer   = t1.id '
                + ' where t2.id_company = $1 ' 
                + ' order by t1.nome ',
            values:[
                id_comp
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
                reject({ code: 400, message: e.message });
            });
        }finally{
            conn.release();
        }
    });
    return promise;
} 

async function doPostCustomer(fields, id_company){
    const conn = await connect.Connection();

    const promise = new Promise((resolve, reject) => {
        const Query = {
            name    : 'post-customer',
            text    : 'insert into ' + configConnBD.schema + '.customers('
                                        + 'tipo,'
                                        + 'nome,'
                                        + 'apelido,'
                                        + 'cpf_cnpj,' 
                                        + 'rg_inscest,' 
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
                                        + 'whatsapp,'
                                        + 'origem,'
                                        + 'contribuinte'                                            
                                        + ')values('  
                                        + '$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)' 
                                        + ' returning id',
            values  :  [   
                    fields.tipo,
                    fields.nome,
                    fields.apelido,
                    fields.cpf_cnpj,
                    fields.rg_inscest,
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
                    fields.origem,
                    fields.contribuinte
            ]
        };

        try {
            conn.query('begin').then(() => {
                conn.query(Query).then(({ rows }) => {

                    doPostCustomersCompaniesRelation(id_company,rows[0].id).then(() => {
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
                    if(e.message.indexOf('duplicate key') >= 0){
                        if(fields.tipo === 'J') {
                            reject({ code: 400, message: commonsCnts.msgCnpjDuplicate })
                        }else{
                            reject({ code: 400, message: commonsCnts.msgCpfDuplicate })
                        }
                    }else{
                        reject({ code: 500, message: e.message });
                    }
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

async function doPostCustomersCompaniesRelation(idCompany,idCustomer){
    const conn = await connect.Connection();

    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: 'post-customer_company_relation',
            text: 'insert into ' + configConnBD.schema + '.customers_companies_relation('
                                 + '    id_company,'
                                 + '    id_customer'
                                 + ')values('
                                 + '    $1,'
                                 + '    $2)',
            values : [
                idCompany,
                idCustomer
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

async function doPutCustomer(fields, id_customer){
    const conn = await connect.Connection();
    
    const promise = new Promise((resolve,reject) => {
        const Query = {
            name : 'update-customers',
            text : 'Update ' + configConnBD.schema +  '.customers '
                    + 'set ' 
                    + '  tipo                =$1,'
                    + '  nome                =$2,'
                    + '  apelido             =$3,'
                    + '  cpf_cnpj            =$4,'
                    + '  rg_inscest          =$5,'
                    + '  cep                 =$6,'
                    + '  logradouro          =$7,'
                    + '  numero              =$8,'
                    + '  complemento         =$9,'
                    + '  bairro              =$10,'
                    + '  municipio           =$11,'
                    + '  municipiocodigo     =$12,'
                    + '  uf                  =$13,'
                    + '  ufcodigo            =$14,'
                    + '  pais                =$15,'
                    + '  paiscodigo          =$16,'
                    + '  email               =$17,'
                    + '  site                =$18,'
                    + '  fonefixo            =$19,'
                    + '  fonemovel           =$20,'
                    + '  facebook            =$21,'
                    + '  linkedin            =$22,'
                    + '  whatsapp            =$23,'
                    + '  origem              =$24,'
                    + '  contribuinte        =$25,'
                    + '  status              =$26'
                    + ' where '
                    +    'id                 =$27',
                values : [   
                    fields.tipo,
                    fields.nome,
                    fields.apelido,
                    fields.cpf_cnpj,
                    fields.rg_inscest,
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
                    fields.origem,
                    fields.contribuinte,
                    fields.status,
                    id_customer
                ]      
            };

            try {
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
                        reject({ code: 500, message: e.message })
                    });
                }).catch(e => {
                    reject({ code: 500, message: e.message })
                });            
            } finally {
                conn.release()
            }
        }); 
        return promise;
}

async function doDeleteCustomer(id_customer){
    const conn = await connect.Connection();

    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: 'delete-customer',
            text: 'delete from ' + configConnBD.schema + '.customers where id = $1',
            values : [
                id_customer
            ]
        }

        try{
            conn.query(Query, (err) => {
                if(err){
                    reject({code: 400, message : err.message});
                }else{
                    resolve();
                }
            });
        }finally{
            conn.release()
        }
    })
    return promise;
}

async function doGetCustomersContacts(id){
    const conn = await connect.Connection();
    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: "get-customers-contacts",
            text: 'select t2.id as id_r, t1.* from ' 
                    + configConnBD.schema + '.customers_contacts as t1'
                    + ' join ' 
                    + configConnBD.schema + '.customers_contacts_relation as t2'
                    + ' on '
                    + ' t2.id_customer_contact = t1.id'
                    + ' where '
                    + ' t2.id_customer = $1 order by t1.nome',
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

async function doPostCustomersContacts(fields, id){
    const conn = await connect.Connection();

    const promise = new Promise((resolve, reject) => {
        const Query = {
            name : 'post-customer',
            text : 'insert into ' + configConnBD.schema + '.customers_contacts('
                                        + 'tipo,'
                                        + 'nome,'
                                        + 'apelido,'
                                        + 'fonefixo,' 
                                        + 'fonemovel,' 
                                        + 'whatsapp,'
                                        + 'email,'
                                        + 'observacao'                                            
                                        + ')values('  
                                        + '$1,$2,$3,$4,$5,$6,$7,$8)' 
                                        + ' returning id',
            values :  [   
                    fields.tipo,
                    fields.nome,
                    fields.apelido,
                    fields.fonefixo,
                    fields.fonemovel,
                    fields.whatsapp,
                    fields.email,
                    fields.observacao
            ]
        };

        try {
            conn.query('begin').then(() => {
                conn.query(Query).then(({ rows }) => {

                    doPostCustomersContactsRelation(id ,rows[0].id).then(() => {
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

async function doPostCustomersContactsRelation(id,id_contact){
    const conn = await connect.Connection();

    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: 'post-customers-contacts-relation',
            text: 'insert into ' + configConnBD.schema + '.customers_contacts_relation('
                                 + '    id_customer,'
                                 + '    id_customer_contact'
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

async function doPutCustomerContacts(fields,id){
    const conn = await connect.Connection().catch(e => {
        return Promise.reject({ code: 500, message: e.message })
    });

    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: 'put-customer-contacts',
            text: 'update ' + configConnBD.schema + '.customers_contacts set '
                    + 'tipo         = $1,'
                    + 'nome         = $2,'
                    + 'apelido      = $3,'
                    + 'fonefixo     = $4,' 
                    + 'fonemovel    = $5,' 
                    + 'whatsapp     = $6,'
                    + 'email        = $7,'
                    + 'observacao   = $8'
                    + ' where '
                    + ' id          = $9',
            values: [
                fields.tipo,
                fields.nome,
                fields.apelido,
                fields.fonefixo,
                fields.fonemovel,
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

async function doDeleteCustomersContacts(id){
    const conn = await connect.Connection().catch(e => {
        return Promise.reject({ code: 500, message: e.message })
    });

    const promise = new Promise((resolve,reject) => {
        const Query = {
            name   : 'delete-customer-contacts',
            text   : 'delete from ' + configConnBD.schema + '.customers_contacts where id = $1',
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
        doGetCustomers, 
        doPostCustomer, 
        doPutCustomer, 
        doDeleteCustomer,
        doGetCustomersContacts, 
        doPostCustomersContacts, 
        doPutCustomerContacts, 
        doDeleteCustomersContacts
}