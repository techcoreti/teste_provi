'use strict'
const express                              = require('express');
const routes                               = express.Router({ caseSensitive: true });
const { companiesBl, companiesContactsBl } = require('../Business/companies');
const { employeeBl, employeesContactsBl }  = require('../Business/employees');
const { customerBl, customerContactsBl }   = require('../Business/customers');
const { commonReplaces } = require('../Business/commons/replaces');

const { 
        doGetCompanies, 
        doPostCompany, 
        doPutCompany, 
        doDeleteCompany,
        doGetContactsCompanies, 
        doPostContactsCompanies, 
        doPutContactsCompanies, 
        doDeleteContactsCompanies 
} = require('../Dao/companies');

const { doGetCompaniesRelations } = require('../Dao/companies-relation')

const { 
    doGetEmployees, 
    doPostEmployee, 
    doPutEmployee, 
    doDeleteEmployee,
    doGetEmployeesContacts,
    doPostEmployeessContacts,
    doPutEmployeesContacts,
    doDeleteEmployeessContacts 

} = require('../Dao/employees');

const { 
    doGetCustomers, 
    doPostCustomer, 
    doPutCustomer, 
    doDeleteCustomer,
    doGetCustomersContacts, 
    doPostCustomersContacts,
    doPutCustomerContacts,
    doDeleteCustomersContacts
} = require('../Dao/customers');

const {
    albumsSpotifyBusiness,
} = require('../Business/albums-spotify')

const {
    doGetAlbumsSpotify
} = require('../Dao/spotify/spotify-api')

const Routes = class{
    constructor() {      
        this.routes = routes;

        // Registra as rotas do cadastro das emrpesas
        this.companies();

        // Registra as rotas dos contatos das empresas
        this.companiesContacts();

        // Registra as rotas do relacionamento matriz e filiais
        this.companiesRelation();

        // Registra as rotas do cadastro de usuários
        this.employees();

        // Registra as rotas dos contatos dos funcionarios
        this.employeesContacts();

        // Registra as rotas do cadastro de clientes
        this.customers();

        // Registra as rotas dos contatos dos clientes
        this.customerContacts();

        // Registra as rotas relativas ao spotify
        this.albumsSpotify();
        
        // Registra uam rota default caso não seja econtrada
        this.routesNotFound()
    }

    companies = () => {
        this.routes.get('/v1/backoffice/companies', async (req, res) =>{
            try {    
                const result = await doGetCompanies(req);
                res.status(result.code).send(result.rows);
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])   
            }
        });

        this.routes.post('/v1/backoffice/companies', companiesBl, async (req, res) => {
            try {
                await doPostCompany(commonReplaces(req.body));
                res.status(201).send();   
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        });

        this.routes.put('/v1/backoffice/companies/:id', companiesBl, async (req, res) => {
            try {
                await doPutCompany(commonReplaces(req.body),req.params.id);
                res.status(204).send();
            } catch (error) {
                res.status(error.code).send({ message: error.message })
            }
        });

        this.routes.delete('/v1/backoffice/companies/:id', companiesBl, async (req, res) => {
            try {
                const result = await doDeleteCompany(req.params.id);
                res.status(result.code).send()
            } catch (error) {
                res.status(500).send([{ message: error.message }])
            }
        })
    }

    companiesContacts = () => {
        this.routes.get('/v1/backoffice/companies_contacts/:id', companiesContactsBl, async (req, res) => {
            try {
                const result = await doGetContactsCompanies(req.params.id);
                res.status(result.code).send( result.rows );  
            } catch (error) {
                res.status(error.code).send({ message: error.message })                
            }
        });

        this.routes.post('/v1/backoffice/companies_contacts/:id', companiesContactsBl, async (req, res) => {
            try {
                await doPostContactsCompanies(commonReplaces(req.body),req.params.id);
                res.status(201).send();
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        })

        this.routes.put('/v1/backoffice/companies_contacts/:id', companiesContactsBl, async (req,res) => {
            try {
                await doPutContactsCompanies(commonReplaces(req.body),req.params.id);
                res.status(204).send();
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        });

        this.routes.delete('/v1/backoffice/companies_contacts/:id', companiesContactsBl, async (req, res) => {
            try {
                await doDeleteContactsCompanies(req.params.id);
                res.status(204).send()
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        });
    }

    companiesRelation = () => {
        this.routes.get('/v1/backoffice/companies_relation/:id', companiesContactsBl, async (req, res) => {
            try {
                const result = await doGetCompaniesRelations(req.params.id);
                res.status(result.code).send([{ rows: result.rows }]);
            } catch (error) {
                res.status(error.code).send({ message: error.message })
            }
        })
    };

    employees = () => {

        this.routes.get('/v1/backoffice/employees/:id', employeeBl, async (req, res) => {
            try {
                const result = await doGetEmployees(req.params.id);
                res.status(result.code).send(result.rows)
            } catch (error) {
                res.status(error.code).send([{ message: error.message }]);
            }
        });

        this.routes.post('/v1/backoffice/employees/:id', employeeBl, async (req, res) => {
            try {
                await doPostEmployee(commonReplaces(req.body),req.params.id);
                res.status(201).send();
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        })

        this.routes.put('/v1/backoffice/employees/:id', employeeBl, async (req, res) => {
            try {
                await doPutEmployee(commonReplaces(req.body),req.params.id);
                res.status(204).send(); 
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        });

        this.routes.delete('/v1/backoffice/employees/:id', employeeBl, async (req, res ) => {
            try {
                await doDeleteEmployee(req.params.id)
                res.status(204).send();
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])                
            }
        });
    }

    employeesContacts = () => {
        this.routes.get('/v1/backoffice/employees_contacts/:id', employeesContactsBl, async (req, res) => {
            try {
                const result = await doGetEmployeesContacts(req.params.id);
                res.status(result.code).send( result.rows );  
            } catch (error) {
                res.status(error.code).send({ message: error.message })                
            }
        });

        this.routes.post('/v1/backoffice/employees_contacts/:id', employeesContactsBl, async (req, res) => {
            try {
                await doPostEmployeessContacts(commonReplaces(req.body),req.params.id);
                res.status(201).send();
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        })

        this.routes.put('/v1/backoffice/employees_contacts/:id', employeesContactsBl, async (req,res) => {
            try {
                await doPutEmployeesContacts(commonReplaces(req.body),req.params.id);
                res.status(204).send();
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        });

        this.routes.delete('/v1/backoffice/employees_contacts/:id', employeesContactsBl, async (req, res ) => {
            try {
                await doDeleteEmployeessContacts(req.params.id);
                res.status(204).send()
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        });
    }

    customers = () => {
        this.routes.get('/v1/backoffice/customers/:id_comp', customerBl, async (req, res ) => {
            try {
                const rows = await doGetCustomers(req.params.id_comp);
                res.status(200).send(rows.rows)
            } catch (error) {
                res.status(error.code).send([{ message: error.message }]);
            }
        });

        this.routes.post('/v1/backoffice/customers/:id_comp', customerBl, async (req, res ) => {
            try {
                await doPostCustomer(commonReplaces(req.body),req.params.id_comp);
                res.status(201).send();
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        })

        this.routes.put('/v1/backoffice/customers/:id_cust', customerBl,  async (req, res ) => {
            try {
                await doPutCustomer(commonReplaces(req.body), req.params.id_cust);
                res.status(204).send();
            } catch (error) {
                res.status(error.code).send({ message: error.message })
            }
        })

        this.routes.delete('/v1/backoffice/customers/:id_cust',  async (req, res ) => {
            try {
                await doDeleteCustomer(req.params.id_cust);
                res.status(204).send();
            } catch (error) {
                res.status(error.code).send({ message: error.message})
            }
        });
    }

    customerContacts = () => {
        this.routes.get('/v1/backoffice/customers_contacts/:id', customerContactsBl, async (req, res ) => {
            try {
                const result = await doGetCustomersContacts(req.params.id);
                res.status(result.code).send( result.rows );  
            } catch (error) {
                res.status(error.code).send({ message: error.message })                
            }
        });

        this.routes.post('/v1/backoffice/customers_contacts/:id', customerContactsBl, async (req, res ) => {
            try {
                await doPostCustomersContacts(commonReplaces(req.body),req.params.id);
                res.status(201).send();
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        })

        this.routes.put('/v1/backoffice/customers_contacts/:id', customerContactsBl, async (req,res ) => {
            try {
                await doPutCustomerContacts(commonReplaces(req.body),req.params.id);
                res.status(204).send();
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        });

        this.routes.delete('/v1/backoffice/customers_contacts/:id', customerContactsBl, async (req, res) => {
            try {
                await doDeleteCustomersContacts(req.params.id);
                res.status(204).send()
            } catch (error) {
                res.status(error.code).send([{ message: error.message }])
            }
        });
    }

    albumsSpotify = () =>{
        routes.get('/v1/spotify/albuns/:id_album', albumsSpotifyBusiness, async (req,res) => {
            try {
                const result = await doGetAlbumsSpotify(req);
                res.status(result.code).send({ message: result.message })
            }catch (err) {
                res.status(err.code).send({ message: err.message })
            }
        });
    }

    routesNotFound = () => {
        this.routes.get('*', (req, res) => {
            res.status(404).send()
        });
    }
};

module.exports = Routes;