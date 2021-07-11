'use strict'
const { commonsCnts }            = require('../Business/commons/constants');
const { ConfigConn, Connection } = require('../Connection')
const paramsConfig               = require('../Config');
const connect                    = new Connection();

async function doGetEmployees(id){
    const conn = await connect.Connection();

    const promise = new Promise((resolve, reject) => {
        const Query = {
            name: 'get-employes',
            text: 'select t2.i_company as id_r, t1.* '
                + 'from ' + paramsConfig.schema + '.employees as t1 ' 
                + 'join ' + paramsConfig.schema + '.employees_companies_relation as t2 '
                + 'on t2.id_employee   = t1.id '
                + 'where t2.id_company = $1 ' 
                + 'order by t1.id ',
            values:[
                id
            ]
        };

        try{
            conn.query(Query).then(({ rows }) => {
                if(rows.length > 0){
                    resolve({ code: 200, rows: rows });
                }else{
                    resolve({ code: 202 });
                }
            }).catch(e => {
                reject({ code: 500, message: e.message })
            });
        }finally{
            conn.release();
        }

    });

    return promise;
} 

async function doPostEmployee(fields, id){
    const conn = await connect.Connection();

    const promise = new Promise((resolve, reject) => {
        const Query = {
           name: 'post-employee',
            text: 'insert into ' + paramsConfig.schema + '.employees('
                    + 'nome,'
                    + 'apelido,'
                    + 'cpf,' 
                    + 'rg,'
                    + 'genero,'
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
                    + 'paiscodigo'
                    + ')values('  
                    + '$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)'
                    + ' returning id ',
            values: [   
                    fields.nome,
                    fields.apelido,
                    fields.cpf,
                    fields.rg,
                    fields.genero,
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
                    fields.paiscodigo
            ]
        };

        try{
            conn.query('begin').then(() => {
                conn.query(Query).then(({ rows }) => {

                    doPostEmployeesCompaniesRelation(id, rows[0].id).then(() => {
                        conn.query('commit').then(() => {
                            resolve()
                        }).catch(e => {
                            conn.query('rollback');
                            reject({ code: 500, message: e.message })
                        });
                    }).catch(e => {
                        conn.query('rollback');
                        reject({ code: 500, message: e.message })
                    })
                    
                }).catch(e => {
                    conn.query('rollback');
                    if(e.message.indexOf('duplicate key') >= 0 ){
                        reject({ code: 400, message: commonsCnts.msgCpfDuplicate })
                    }else{
                        reject({ code: 500, message: e.message })
                    }
                })
            }).catch(e => {
                reject({ code: 500, message: e.message })
            });
        }finally{
            conn.release()
        }
    });

    return promise;
}

async function doPostEmployeesCompaniesRelation(id,id_employee){
    const conn = await connect.Connection();

    const promise = new Promise((resolve,reject) => {
        const Query = {
           name: 'post-employees_companies_relation',
            text: 'insert into ' + paramsConfig.schema + '.employees_companies_relation('
                                 + '  id_company,'
                                 + '  id_employee'
                                 + ')values('
                                 + '  $1,'
                                 + '  $2)',
            values : [
                id,
                id_employee
            ]
        }

        try{
            conn.query(Query).then(() => { resolve() }).catch(e => { reject(e) })
        } finally {
            conn.release()
        }
    });

    return promise;

}

async function doPutEmployee(fields, id){
    const conn = await connect.Connection();

    const promise = new Promise((resolve,reject) => {
        const Query = {
           name: 'update-employee',
            text: 'update ' + paramsConfig.schema + '.employees set '
                    + 'nome             =$1,'
                    + 'apelido          =$2,'
                    + 'rg               =$3,'
                    + 'genero           =$4,'
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
            values  : [
                    fields.nome,
                    fields.apelido,
                    fields.rg,
                    fields.genero,
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
                        resolve();
                    }).catch(e => {
                        conn.query('rollback');
                        reject({ code: 500, message: e.message })
                    })
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

async function doDeleteEmployee(id){
    const conn = await connect.Connection();
    const promise = new Promise((resolve, reject) => {
        const Query = {
           name: 'delete-employee',
            text: 'delete from ' + paramsConfig.schema + '.employees where id = $1',
            values: [
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
    });

    return promise;
}

async function doGetEmployeesContacts(id){
    const conn = await connect.Connection();
    const promise = new Promise((resolve,reject) => {
        const Query = {
            name: "get-eployees-contacts",
            text: 'select t2.id as id_r, t1.* from ' 
                    + paamsConfig.schema + '.employees_contacts as t1'
                    + ' join ' 
                    + paramsConfig.schema + '.employees_contacts_relation as t2'
                    + ' on '
                    + ' t2.id_employee_contact = t1.id'
                    + ' where '
                    + ' t2.id_employee = $1 order by t1.nome',
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

async function doPostEmployeessContacts(fields, id){
    const conn = await connect.Connection();

    const promise = new Promise((resolve, reject) => {
        const Query = {
           name : 'post-employees',
            text : 'insert into ' + paramsConfig.schema + '.employees_contacts('
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

                    doPostEmployeessContactsRelation(id ,rows[0].id).then(() => {
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

async function doPostEmployeessContactsRelation(id,id_contact){
    const conn = await connect.Connection();

    const promise = new Promise((resolve,reject) => {
        const Query = {
           name: 'post-employees-contacts-relation',
            text: 'insert into ' + paramsConfig.schema + '.employees_contacts_relation('
                                 + '    id_employee,'
                                 + '    id_employee_contact'
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

async function doPutEmployeesContacts(fields,id){
    const conn = await connect.Connection().catch(e => {
        return Promise.reject({ code: 500, message: e.message })
    });

    const promise = new Promise((resolve,reject) => {
        const Query = {
           name: 'put-employees-contacts',
            text: 'update ' + paramsConfig.schema + '.employees_contacts set '
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

async function doDeleteEmployeessContacts(id){
    const conn = await connect.Connection().catch(e => {
        return Promise.reject({ code: 500, message: e.message })
    });

    const promise = new Promise((resolve,reject) => {
        const Query = {
           name   : 'delete-employees-contacts',
            text   : 'delete from ' + paramsConfig.schema + '.employees_contacts where id = $1',
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
    doPostEmployee, 
    doGetEmployees, 
    doPutEmployee, 
    doDeleteEmployee,
    doGetEmployeesContacts,
    doPostEmployeessContacts,
    doPutEmployeesContacts,
    doDeleteEmployeessContacts
 }