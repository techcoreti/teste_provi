const commonReplaces = (e = {}) => {
    
    switch (e.cnpj) {
        case undefined:
            e.cnpj = undefined;
            break;
        case null:
            e.cnpj = undefined;
            break;
        case '':
            e.cnpj = undefined;
            break;
        default:
            e.cnpj = e.cnpj.replace(/\D+/g,'');
    }

    switch (e.fonefixo) {
        case undefined:
            e.fonefixo = undefined;
            break;
        case null:
            e.fonefixo = undefined;
            break;
        case '':
            e.fonefixo = undefined;
            break;
        default:
            e.fonefixo = e.fonefixo.replace(/\D+/g,'');
    }

    switch (e.fonemovel) {
        case undefined:
            e.fonemovel = undefined;
            break;
        case null:
            e.fonemovel = undefined;
            break;
        case '':
            e.fonemovel = undefined;
            break;
        default:
            e.fonemovel = e.fonemovel.replace(/\D+/g,'');
    }

    return e;
};

module.exports = { commonReplaces}