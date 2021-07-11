'use strict'
const { checkCnpj } = require('../commons/check-cnpj');
const { checkCpf } = require('../commons/check-cpf')
const { commonsCnts, companiesCnts, customersCnts, contactsCnts }  = require('../commons/constants');

const customerBl = async (req, res, next) => {
    try {        
        const { body, params, method } = req;
        const messages = [];  
        let   msgNome;
        let   msgApelido;  
        let   msgCpfCnpj;
        let   msgCpfCnpjErr;
        let   msgRgInscEst;

        if(method === 'GET'){
            switch(params.id_comp){
                case undefined:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                case null:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                default:
                    next();
                }  
            return;
        }

        if(method === 'POST'){
            switch(params.id_comp){
                case undefined:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
                case null:
                    res.status(400).send({ message: commonsCnts.msgIdCompany })
                    return;
            }

            switch(body.tipo){
                case undefined:
                    res.status(400).send({ message: commonsCnts.msgTipo })
                    return;
                case null:
                    res.status(400).send({ message: commonsCnts.msgTipo })
                    return;
            }
        }

        if(method === 'PUT'){
            switch(params.id_cust){
                case undefined:
                    res.status(400).send({ message: customersCnts.msgIdCustomer })
                    return;
                case null:
                    res.status(400).send({ message: customersCnts.msgIdCustomer })
                    return;
            }
        }

        if(method === 'DELETE'){
            switch(params.id_cust){
                case undefined:
                    res.status(400).send({ message: customersCnts.msgIdCustomer })
                    return;
                case null:
                    res.status(400).send({ message: customersCnts.msgIdCustomer })
                    return;
                default:
                    next();
            }  
            return;
        }

        if(body.tipo === 'J'){
            msgNome       = companiesCnts.msgRazaoSocial
            msgApelido    = companiesCnts.msgNomeFantasia
            msgCpfCnpj    = companiesCnts.msgCnpj
            msgCpfCnpjErr = companiesCnts.msgCnpjErr
            msgRgInscEst  = companiesCnts.msgInscEstadual
        }else{
            msgNome       = customersCnts.msgNome
            msgApelido    = customersCnts.msgApelido
            msgCpfCnpj    = customersCnts.msgCpf
            msgCpfCnpjErr = customersCnts.msgCpfErr
            msgRgInscEst  = customersCnts.msgRg
        }

        if(req.method === 'POST'){
    
            switch(body.cpf_cnpj){
                case undefined:
                    messages.push({ message: msgCpfCnpj })
                    break;
                case null: 
                    messages.push({ message: msgCpfCnpj })
                    break;  
                default:
                    if(body.cpf_cnpj.length <= 0){
                        messages.push({ message: msgCpfCnpj })
                    }else{
                        if(body.tipo === 'F'){
                            if(!checkCpf(body.cpf_cnpj))
                                messages.push({ message: msgCpfCnpjErr })
                        }else{
                            if(!checkCnpj(body.cpf_cnpj))
                                messages.push({ message: msgCpfCnpjErr })    
                        }
                    }         
            }
        }

        switch (body.nome) {
            case undefined :
                messages.push({ message: msgNome })
                break;
            case null:
                messages.push({ message: msgNome })
                break;
            default:
                if(body.nome.length <= 0){
                    messages.push({ message: msgNome })
                }else if(!isNaN(body.nome)){
                    messages.push({ message: msgNome })
                }
        }

        switch(body.apelido){
            case undefined:
                messages.push({ message: msgApelido })
                break;
            case null: 
                messages.push({ message: msgApelido })
                break;
            default:
                if(body.apelido.length <= 0){
                    messages.push({ message: msgApelido })
                }else if(!isNaN(body.apelido)){
                    messages.push({ message: msgApelido })
                }
        }

        switch(body.rg_inscest){
            case undefined:
                messages.push({ message: msgRgInscEst })
                break;
            case null:
                messages.push({ message: msgRgInscEst })
                break;
            default:
                if(body.rg_inscest.length <= 0){
                    messages.push({ message: msgRgInscEst })
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

        switch(body.ufcodigo){
            case undefined:
                messages.push({ message: commonsCnts.msgCodifoUf })
                break;
            case null:
                messages.push({ message: commonsCnts.msgCodifoUf })
                break;
            default:
                if(body.ufcodigo.length <= 0){
                    messages.push({ message: commonsCnts.msgCodigoUf })
                }else if(isNaN(body.ufcodigo)){
                    messages.push({ message: commonsCnts.msgCodifoUf })
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
                break;
            default:
                if(body.paiscodigo.length <= 0){
                    messages.push({ message: commonsCnts.msgPaisCodigo })
                }else if(isNaN(body.paiscodigo)){
                    messages.push({ message: commonsCnts.msgPaisCodigoErr })
                }
        }

        switch(body.fonefixo){
            case undefined:
                break;
            case null:
                break;
            default:
                if(typeof body.fonefixo === 'number' )
                    messages.push({ message: commonsCnts.msgFoneErr })
        }

        switch(body.fonemovel){
            case undefined:
                break;
            case null:
                break;
            default:
                if(typeof body.fonemovel === 'number' )
                    messages.push({ message: commonsCnts.msgFoneErr })
        }

        switch(body.whatsapp){
            case undefined:
                break;
            case null:
                break;
            default:
                if(typeof body.whatsapp === 'number' )
                    messages.push({ message: commonsCnts.msgFoneWhatsErr })
        }

        switch(body.origem){
            case undefined:
                messages.push({ message: commonsCnts.msgOrigem })
                break;
            case null:
                messages.push({ message: commonsCnts.msgOrigem })
            default:
                if(body.origem.length <= 0){
                    messages.push({ message: commonsCnts.msgOrigem })
                }
        }

        switch(body.contribuinte){
            case undefined:
                messages.push({ message: commonsCnts.msgContribuinte })
                break;
            case null:
                messages.push({ message: commonsCnts.msgContribuinte })
            default: 
                if([1,2,9].indexOf(body.contribuinte) < 0){
                    messages.push({ message: commonsCnts.msgContribuinte })
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

const customerContactsBl = async (req, res, next) => {
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

    }catch{
        throw new Error({ code: 500, message: 'Erro interno desconhecido.' })
    }
}

module.exports = { customerBl, customerContactsBl } 