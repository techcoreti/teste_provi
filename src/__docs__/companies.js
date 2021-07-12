/**
 * @api {get} /companies Listar Empresas.
 * @apiVersion 1.0.0
 * @apiDescription Lista e retorna as empresas cadastradas. 
 * @apiGroup Companies
 * @apiSuccess {Object[]} body Retorna um array de objetos com todas as empresas cadastradas
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *   [{
 *      "id": '8b1c7f0a-75c3-41b2-b5a2-12e5c70a2fec',
 *      "datacadastro": "2016-02-10T15:46:51.778Z",
 *      "datamodificado": "2016-02-10T15:46:51.778Z",
 *      "razaosocial": "Empresa teste"
 *    },{
 *      "id": '8b1c7f0a-75c3-41b2-b5a2-235212e5c7',
 *      "razaosocial": "Empresa teste II",
 *      "datacadastro": "2016-02-10T15:46:51.778Z",
 *      "datamodificado": "2016-02-10T15:46:51.778Z",
 *      "razaosocial": "Empresa teste"
 *   }]
 * 
 * @apiSuccessExample {json} No Content
 *    HTTP/1.1 204 OK 
 *    No content
 * 
 * @apiErrorExample {json} Bad Request
 *    HTTP/1.1 400 Erro na solicitação
 * 
 * @apiErrorExample {json} Not Found
 *    HTTP/1.1 404 Recurso não encontrado
 * 
 * @apiErrorExample {json} Internal Server Error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {post} /companies Cadastrar empresas.
 * @apiDescription <span>Contém todas as regras de negócios para que os dados sejam inseridos de forma consistente.</span>
 * @apiVersion 1.0.0
 * @apiGroup Companies
 * @apiParam {uuid} id Identificador único do registro.
 * @apiParam {datetime} datacadastro Exibe a data do cadastro.
 * @apiParam {datetime} datamodificado Exibe a data da ultima alteração do registro.
 * @apiParam {String{80}} razaosocial Razão social da empresa.
 * @apiParam {String{60}} nomefantasia Nome fantasia(apelido) da empresa.
 * @apiParam {String{12}} inscestadual Inscrição estadual da empresa.
 * @apiParam {String{12}} inscmunicipal Inscrição municipal da empresa.
 * @apiParam {String{8}} cep Inscrição estadual da empresa.
 * @apiParam {String{80}} logradouro Inscrição estadual da empresa.
 * @apiParam {String{14}} numero Inscrição estadual da empresa.
 * @apiParam {String{35}} complemento Inscrição estadual da empresa.
 * @apiParam {String{60}} bairro Inscrição estadual da empresa.
 * @apiParam {String{60}} municipio Inscrição estadual da empresa.
 * @apiParam {Integer} muncipiocodigo Inscrição estadual da empresa.
 * 
 * 
 * @apiSampleRequest off
 * 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 201 OK
 * 
 * @apiErrorExample {json} Bad Request
 * HTTP/1.1 400 
 *   [{ 
 *      message: "Informe um id válido."
 *    },{
 *      message: "Informe a razão social da empresa."
 *    },{
 *      message: "Informe o cnpj da empresa."   
 *      },{
 *      message: "O cnpj informado já se encontra cadastrado no sistema."
 *    }]
 * 
 * @apiErrorExample {json} Not Found
 * HTTP/1.1 404 Recurso não encontrado
 * 
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {put} /companies/{id} Alterar Cadastros.
 * @apiVersion 1.0.0
 * @apiDescription <span>Contém todas as regras de negócios para que os dados sejam inseridos de forma consistente.</spa>
 * @apiGroup Companies
 * @apiParam {uuid} id Identificador único do registro.
 * @apiParam {Object} fields Enviados no body da requisição em formato json
 * @apiSampleRequest off
 * 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 204 OK
 * 
 * @apiErrorExample {json} Bad Request
 * HTTP/1.1 400 
 *   [{ 
 *      message: "Informe um id válido."
 *    },{
 *      message: "Informe a razão social da empresa."
 *    },{
 *      message: "Informe o cnpj da empresa."   
 *   }]
 * 
 * @apiErrorExample {json} Not Found
 * HTTP/1.1 404 Recurso não encontrado
 * 
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {delete} /companies/{id} Excluir Empresas.
 * @apiVersion 1.0.0
 * @apiGroup Companies
 * @apiParam {uuid} id Identificador único do registro.
 * @apiSampleRequest off
 * 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 204 OK
 * 
 * @apiErrorExample {json} Bad Request
 * HTTP/1.1 400 
 *   [{ 
 *      message: "Informe um id válido."
 *   }]
 * @apiErrorExample {json} Not Found
 * HTTP/1.1 404 Recurso não encontrado
 * 
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */