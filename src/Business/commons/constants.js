'use strict'
// Variaveis utilizadas repetidas vezes
const commonsCnts = {
    msgIdCompany          : 'Informe o id da empresa a qual será vinculada o cadastro.',
    msgIdError            : 'O identificador único informado não é válido.',  
    msgTipo               : 'Informe o tipo de cliente, pessoa jurídica ou física.',
    msgTipoErr            : 'O tipo informádo não é válido para o cadastro.',
    msgCep                : 'Informe o número do Cep.',
    msgCepErr             : 'O tipo informádo para o cep é inválido.',
    msgLogradouro         : 'Informe o endereço para cadastro.',
    msgNumero             : 'Informe o número para o cadastro.',
    msgBairro             : 'informe o nome do bairro para cadastro.',  
    msgMunicipio          : 'informe o nome do município para cadastro.', 
    msgMunicipioCodigo    : 'Informe o código do município para cadastro.',
    msgMunicipioCodigoErr : 'O código informado para o município não é válido.',
    msgUf                 : 'Informe o nome da uf para cadastro.', 
    msgUfErr              : 'O nome da uf informado não é válido.',
    msgCodifoUf           : 'Informe o código da Uf', 
    msgCodigoUfErr        : 'O código da uf informado não é válido.', 
    msgPais               : 'Informe o nome do país para cadastro', 
    msgPaisCodigo         : 'Informe o código do país para cadastro',
    msgPaisCodigoErr      : 'O código do país informado não é válido.', 
    msgFoneFixo           : 'Informe o número do Telefone de contato.',
    msgFoneMovel          : 'Informe o número do telefone móvel.',
    msgFoneErr            : 'O valor informado não é um número válido de telefone.',
    msgFoneWhatsErr       : 'O valor informado não é um número válido de whatsapp.',    
    msgOrigem             : 'Informe a origem do cadastro, ex.: RET = Retaguarda, PDV - Frente de Caixa, MOB - Mobile',
    msgEmail              : 'Informe um endereço de e-mail válido.',
 

    // Mensagens pertinentes as questões fiscais do cadastro
    // 1 = Contribuinte do ICMS
    // 2 - Não Contribuinte do ICMS
    // 9 - Contribuinte Isento
    msgContribuinte       : 'Informe o tipo de contribuinte para este cadastro, 1,2 ou 9',

    // Msgs para tratar o módulo DAO
    msgDelParamInvalid    : 'Parâmetro inválido no pedido, tente novamente.',

    // Cpf ou cnpj duplicado
    msgCnpjDuplicate      : 'O cnpj informado já se encontra cadastrado no sistema.',
    msgCpfDuplicate       : 'O cpf informado já se encontra cadastrado no sistema.'      

}

const employeesCnts = {
    msgNome        : 'Informe o nome completo para o cadastro.',
    msgApelido     : 'Informe o apelido para o apelido.',
    msgCpf         : 'Informe o número do cpf.',
    msgCpfErr      : 'O cpf informado não é válido.',    
    msgRg          : 'Informe o número do rg.',
    msgGenero      : 'Informe o gênero da pessoa.',
    msgIdEmployee  : 'Informe o identificador único para o cadastro.'
}

const customersCnts = {
    msgNome        : 'Informe o nome completo para o cadastro.',
    msgApelido     : 'Informe pelo menos 3 carácteres para o apelido.',
    msgCpf         : 'Informe o número do cpf.',
    msgCpfErr      : 'O cpf informado não é válido.',    
    msgRg          : 'Informe o número do rg.',
    msgIdCustomer  : 'Informe o identificador único para o cadastro.', 
}

const contactsCnts = {
    msgTipoContato     : 'Informe o tipo de contato.', 
    msgNomeContato     : 'Informe o nome do contato.',
    msgFone            : 'Informe ao menos um telefone para o contato', 
    msgTipoContatoErr  : 'Tipo de contato informado não é válido.', 
    msgIdContatos      : 'Informe o identificador único do cadastro do contato.',
    msgIdContatosErr   : 'Identificador único inválido.',
    msgDepartamento    : 'Informe o departamento.',
    msgSetor           : 'Informe o setor para este cadastro.',
}

const companiesCnts = {
    msgRazaoSocial   : 'Informe a razão social da empresa.',
    msgRazaoSocialEn : 'Informe a razão social da empresa.',
    
    msgNomeFantasia : 'Informe o nome fantasia da empresa.',
    msgCnpj         : 'Informe o número do cnpj.',
    msgCnpjErr      : 'O cnpj informado não é válido.',    
    msgInscEstadual : 'Informe o número da inscrição estadual.',
    msgIdCompany    : 'Informe o identificador único para o cadastro.' // Uso específico do cadastro
}

const spotify = {
    msgErrorRequest : 'Erro na requisição, tente novamente.',
    msgErrorMethod  : 'Tipo de requisição inválida.',
    msgErrorParams  : 'Informe seu id do artista.'
}

module.exports = { commonsCnts, employeesCnts, companiesCnts, customersCnts, contactsCnts, spotify }