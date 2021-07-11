'use strict'
const { checkCnpj } = require('../commons/check-cnpj')
const { commonsCnts, companiesCnts, contactsCnts }  = require('../commons/constants');

const companiesBl = async (req, res, next) => {
    try {        
        const { body, params, method } = req;
        const messages = []; 

        if(method === 'PUT'){
            switch(params.id){
                case undefined:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                case null:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                default:
                    if(!isNaN(params.id)){
                        res.status(400).send({ message: commonsCnts.msgIdCompany })
                    }
            }
        }

        if(method === 'DELETE'){
            switch(params.id){
                case undefined:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                case null:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                default:
                    if(!isNaN(params.id)){
                        res.status(400).send({ message: commonsCnts.msgIdCompany })
                    }else{
                        next();
                    }
            }
            return;
        }

        switch (body.razaosocial) {
            case undefined :
                messages.push({ message: companiesCnts.msgRazaoSocial }) 
                break;
            case null:
                messages.push({ message: companiesCnts.msgRazaoSocial })
                break;
            default:
                if(body.razaosocial.length <= 0){
                    messages.push({ message: companiesCnts.msgRazaoSocial })
                }else if(!isNaN(body.razaosocial)){
                    messages.push({ message: companiesCnts.msgRazaoSocial })
                }
        }

        switch(body.nomefantasia){
            case undefined:
                messages.push({ message: companiesCnts.msgNomeFantasia })
                break;
            case null: 
                messages.push({ message: companiesCnts.msgNomeFantasia })
                break;
            default:
                if(body.nomefantasia.length <= 0){
                    messages.push({ message: companiesCnts.msgNomeFantasia })
                }else if(!isNaN(body.nomefantasia)){
                    messages.push({ message: companiesCnts.msgNomeFantasia })
                }
        }

        if(method === 'POST'){
            switch(body.cnpj){
                case undefined:
                    messages.push({ message: companiesCnts.msgCnpj })
                    break;
                case null: 
                    messages.push({ message: companiesCnts.msgCnpj })
                    break;  
                default:
                    if(body.cnpj.length <= 0){
                        messages.push({ message: companiesCnts.msgCnpjErr })
                    }else if(!checkCnpj(body.cnpj)){
                        messages.push({ message: companiesCnts.msgCnpjErr })
                    }         
            }
        }

        switch(body.inscestadual){
            case undefined:
                messages.push({ message: companiesCnts.msgInscEstadual })
                break;
            case null:
                messages.push({ message: companiesCnts.msgInscEstadual })
                break;
            default:
                if(body.inscestadual.length <= 0){
                    messages.push({ message: companiesCnts.msgInscEstadual })
                }
        }

        switch(body.cep){
            case undefined: 
                messages.push({ message: companiesCnts.msgCep })
                break;
            case null:
                messages.push({ message: companiesCnts.msgCep })
                break;
            default:
                if(body.cep.length <= 0){
                    messages.push({ message: companiesCnts.msgCep })
                }else if(isNaN(body.cep)){
                    messages.push({ message: companiesCnts.msgCepErr })
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

const companiesContactsBl = async (req, res, next) => {
    try{
        const { body, params, method } = req;
        const messages = [];

        if(method === 'GET' || method === 'DELETE'){
            switch(params.id){
                case undefined:
                    res.status(400).send({ message: commonsCnts.msgIdCompany  })
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
                    res.status(400).send({ message: contactsCnts.msgIdContatos })
                    return;
                case null:
                    res.status(400).send({ message: contactsCnts.msgIdContatos })
                    return;
                default:
                    if(!isNaN(params.id)){
                        res.status(400).send({ message: contactsCnts.msgIdContatosErr })
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

        switch(body.departamento){
            case undefined:
                messages.push({ message: contactsCnts.msgDepartamento });
                break;
            case null:
                messages.push({ message: contactsCnts.msgDepartamento });
                break;
        }

        switch(body.setor){
            case undefined:
                messages.push({ message: contactsCnts.msgSetor });
                break;
            case null:
                messages.push({ message: contactsCnts.msgSetor });
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

module.exports = { companiesBl, companiesContactsBl }