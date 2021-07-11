'use strict'
const { checkCpf } = require('../commons/check-cpf')
const { commonsCnts, employeesCnts, contactsCnts }  = require('../commons/constants');

const employeeBl = async (req, res, next) => {
    try {        
        const { body, params, method } = req;
        const messages = []; 

        if(method === 'GET' || method === 'DELETE'){
            switch(params.id){
                case undefined:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                case null:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                default:
                    if(!isNaN(params.id)){
                        res.status(400).send({ message: commonsCnts.msgIdError })
                    }else{
                        next();
                    }
            }  
            return;   
        }

        if(method === 'POST'){
            switch(params.id){
                case undefined:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                case null:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                default:
                    if(!isNaN(params.id)){
                        res.status(400).send({ message: commonsCnts.msgIdError })
                    }
            }
        }

        if(method === 'PUT'){
            switch(params.id){
                case undefined:
                    res.status(400).send({ message: employeesCnts.msgIdEmployee })
                    return;
                case null:
                    res.status(400).send({ message: employeesCnts.msgIdEmployee })
                    return;
                default:
                    if(!isNaN(params.id)){
                        res.status(400).send({ message: commonsCnts.msgIdError })
                    }
            }
        }

        switch(body.nome) {
            case undefined :
                messages.push({ message: employeesCnts.msgNome })
                break;
            case null:
                messages.push({ message: employeesCnts.msgNome })
                break;
            default:
                if(body.nome.length <= 0){
                    messages.push({ message: employeesCnts.msgNome })
                }else if(!isNaN(body.nome)){
                    messages.push({ message: employeesCnts.msgNome })
                }
        }

        switch(body.apelido){
            case undefined:
                messages.push({ message: employeesCnts.msgApelido })
                break;
            case null: 
                messages.push({ message: employeesCnts.msgApelido })
                break;
            default:
                if(body.apelido.length <= 0){
                    messages.push({ message: employeesCnts.msgApelido })
                }else if(!isNaN(body.apelido)){
                    messages.push({ message: employeesCnts.msgApelido })
                }
        }

        if(method === 'POST') {
            switch(body.cpf){
                case undefined:
                    messages.push({ message: employeesCnts.msgCpf })
                    break;
                case null: 
                    messages.push({ message: employeesCnts.msgCpf })
                    break;  
                default:
                    if(body.cpf.length <= 0){
                        messages.push({ message: employeesCnts.msgCpfErr })
                    }else if(!checkCpf(body.cpf)){
                        messages.push({ message: employeesCnts.msgCpfErr })
                    }         
            }
        }

        switch(body.rg){
            case undefined:
                messages.push({ message: employeesCnts.msgRg })
                break;
            case null:
                messages.push({ message: employeesCnts.msgRg })
                break;
            default:
                if(body.rg.length <= 0){
                    messages.push({ message: employeesCnts.msgRg })
                }
        }

        switch(body.genero){
            case undefined:
                messages.push({ message: employeesCnts.msgGenero })
                break;
            case null:
                messages.push({ message: employeesCnts.msgGenero })
                break;
            default:
                if(body.genero.length <= 0){
                    messages.push({ message: employeesCnts.msgGenero })
                }
        }

        switch(body.cep){
            case undefined: 
                messages.push({ message: commonsCnts.msgCep })
                break;
            case null:
                messages.push({ message: commonsCnts.msgCep })
                break;
            default:
                if(body.cep.length <= 0){
                    messages.push({ message: commonsCnts.msgCep })
                }else if(isNaN(body.cep)){
                    messages.push({ message: commonsCnts.msgCepErr })
                }
        }

        switch(body.logradouro){
            case undefined:
                messages.push({ message: commonsCnts.msgLogradouro })
                break;
            case null:
                messages.push({ message: commonsCnts.msgLogradouro })
                break;
            default:
                if(body.logradouro.length <= 0){
                    messages.push({ message: commonsCnts.msgLogradouro })
                }else if(!isNaN(body.logradouro)){
                    messages.push({ message: commonsCnts.msgLogradouro })
                }
        }

        switch(body.numero){
            case undefined:
                messages.push({ message: commonsCnts.msgNumero })
                break;
            case null:
                messages.push({ message: commonsCnts.msgNumero })
                break;
            default:
                if(body.numero.length <= 0){
                    messages.push({ message: commonsCnts.msgNumero })
                }else if(isNaN(body.numero)){
                    messages.push({ message: commonsCnts.msgNumero })
                }
        }

        switch(body.bairro){
            case undefined:
                messages.push({ message: commonsCnts.msgBairro })
                break;
            case null:
                messages.push({ message: commonsCnts.msgBairro })
                break;
            default:
                if(body.bairro.length <= 0){
                    messages.push({ message: commonsCnts.msgBairro })
                }else if(!isNaN(body.bairro)){
                    messages.push({ message: commonsCnts.msgBairro })
                }
        }

        switch(body.municipio){
            case undefined:
                messages.push({ message: commonsCnts.msgMunicipio })
                break;
            case null:
                messages.push({ message: commonsCnts.msgMunicipio })
                break;
            default:
                if(body.municipio.length <= 0){
                    messages.push({ message: commonsCnts.msgMunicipio })
                }else if(!isNaN(body.municipio)){
                    messages.push({ message: commonsCnts.msgMunicipio })
                }
        }

        switch(body.municipiocodigo){
            case undefined:
                messages.push({ message: commonsCnts.msgMunicipioCodigo })
                break;
            case null:
                messages.push({ message: commonsCnts.msgMunicipioCodigo })
                break;
            default:
                if(body.municipiocodigo.length <= 0){
                    messages.push({ message: commonsCnts.msgMunicipioCodigo })
                }else if(isNaN(body.municipiocodigo)){
                    messages.push({ message: commonsCnts.msgMunicipioCodigoErr })
                }
        }

        switch(body.uf){
            case undefined:
                messages.push({ message: commonsCnts.msgUf })
                break;
            case null:
                messages.push({ message: commonsCnts.msgUf })
                break;
            default:
                if(body.uf.length < 2){
                    messages.push({ message: commonsCnts.msgUf })
                }else if(!isNaN(body.uf)){
                    messages.push({ message: commonsCnts.msgUfErr })
                }else if(body.uf.replace(/[0-9]+/g,'').length < 2){
                    messages.push({ message: commonsCnts.msgUfErr })
                }
        }

        switch(body.pais){
            case undefined:
                messages.push({ message: commonsCnts.msgPais })
                break;
            case null:
                messages.push({ message: commonsCnts.msgPais })
                break;
            default:
                if(body.pais.length <= 0){
                    messages.push({ message: commonsCnts.msgPais })
                }else if(!isNaN(body.pais)){
                    messages.push({ message: commonsCnts.msgPais })
                }
        }

        switch(body.paiscodigo){
            case undefined:
                messages.push({ message: commonsCnts.msgPaisCodigo })
                break;
            case null:
                messages.push({ message: commonsCnts.msgPaisCodigo })
            default:
                if(isNaN(body.paiscodigo.length <= 0)){
                    messages.push({ message: commonsCnts.msgPaisCodigo })
                }else if(isNaN(body.paiscodigo)){
                    messages.push({ message: commonsCnts.msgPaisCodigoErr })
                }
        }
        
        if(messages.length <= 0){
            next();
        }else{            
            res.status(400).send( messages )
        }

    } catch (error) {
        throw new Error({ code: 500, message: 'Erro interno desconhecido.' })
    }
}

const employeesContactsBl = async (req, res, next) => {
    try{
        const { body, params, method } = req;
        const messages = [];

        if(method === 'GET' || method === 'DELETE'){
            switch(params.id){
                case undefined:
                    res.status(400).send({ message: contactsCnts.msgIdContatos })
                    return;
                case null:
                    res.status(400).send({ message: contactsCnts.msgIdContatos })
                    return;
                default:
                    if(!isNaN(params.id)){
                        res.status(400).send({ message: commonsCnts.msgIdError })
                    }else{
                        next();
                    }
                }  
            return;
        }

        if(method === 'POST'){
            switch(params.id){
                case undefined:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                case null:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                default:
                    if(!isNaN(params.id)){
                        res.status(400).send({ message: commonsCnts.msgIdError })
                    }
            } 
        }

        if(method === 'PUT'){
            switch(params.id){
                case undefined:
                    res.status(400).send({ message: contactsCnts.msgIdContatos })
                    return;
                case null:
                    res.status(400).send({ message: contactsCnts.msgIdContatos })
                    return;
                default:
                    if(!isNaN(params.id)){
                        res.status(400).send({ message: commonsCnts.msgIdError })
                    }
            } 
        }

        switch(body.nome){
            case undefined:
                messages.push({ message: contactsCnts.msgNomeContato });
                break;
            case null:
                messages.push({ message: contactsCnts.msgNomeContato });
                break;
        }

        switch(body.tipo){
            case undefined:
                messages.push({ message: contactsCnts.msgTipoContato });
                break;
            case null:
                messages.push({ message: contactsCnts.msgTipoContato });
                break;
        }
        
        switch(body.fonefixo){
            case undefined:
                switch(body.fonemovel){
                    case undefined:
                        messages.push({ message: contactsCnts.msgFone });
                        break;
                    case null:
                        messages.push({ message: contactsCnts.msgFone });
                        break;
                    default: 
                        if(body.fonemovel.length <= 0){
                            messages.push({ message: contactsCnts.msgFone });
                        }
                }
                break;
            case null:
                switch(body.fonemovel){
                    case undefined:
                        messages.push({ message: contactsCnts.msgFone });
                        break;
                    case null:
                        messages.push({ message: contactsCnts.msgFone });
                        break;
                    default: 
                        if(body.fonemovel.length <= 0){
                            messages.push({ message: contactsCnts.msgFone });
                        }
                }
                break;
            default:
                if(body.fonefixo.length <= 0){
                    switch(body.fonemovel){
                        case undefined:
                            messages.push({ message: contactsCnts.msgFone });
                            break;
                        case null:
                            messages.push({ message: contactsCnts.msgFone });
                            break;
                        default: 
                            if(body.fonemovel.length <= 0){
                                messages.push({ message: contactsCnts.msgFone });
                            }
                    }
                }
        }

        switch(body.email){
            case undefined:
                messages.push({ message: commonsCnts.msgEmail });
                break;
            case null:
                messages.push({ message: commonsCnts.msgEmail });
                break;
        }

        if(messages.length <= 0){
            next();
        }else{            
            res.status(400).send( messages )
        }

    }catch(err){
        throw new Error({ code: 500, message: 'Erro interno desconhecido.' })
    }
}

module.exports = { employeeBl, employeesContactsBl }