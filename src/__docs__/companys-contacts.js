/**
 * @api {get} /companies_contacts/{id} Lista contatos.
 * @apiVersion 1.0.0
 * @apiGroup Companies Contacts
 * @apiSampleRequest off
 * @apiParam {uuid} id Identificador da empresa vinculada. 
 * @apiSuccess {Object[]} body Lista os contatos das empresas.
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  [{
 *      "id": '8b1c7f0a-75c3-41b2-b5a2-12e5c70a2fec',
 *      "datamodificado": "2016-02-10T15:46:51.778Z",
 *      "datamodificado": "2016-02-10T15:46:51.778Z",
 *      "nome": "Nome do contato.",
 *      "apelido": "Apelido do contato.",
 *      ...
 *  }]
 * 
 * @apiSuccessExample {json} No Content
 * HTTP/1.1 204 OK No content
 * 
 * @apiErrorExample {json} Bad Request
 * HTTP/1.1 400 Erro na solicitação
 * 
 * @apiErrorExample {json} Not Found
 * HTTP/1.1 404 Recurso não encontrado
 * 
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {post} /companies_contacts/{id} Cadastrar contatos.
 * @apiVersion 1.0.0
 * @apiDescription <span>Contém todas as regras de negócios para que os dados sejam inseridos de forma consistente.</spa>
 * @apiGroup Companies Contacts
 * @apiParam {uuid} id Identificador da empresa vinculada. 
 * @apiParam {object} fields Enviados no corpo da request em formato json. 
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
 *      message: "Informe o nome do contato."
 *    },{
 *      message: "Informe o tipo de contato."   
 *    }]
 * 
 * @apiErrorExample {json} Not Found
 * HTTP/1.1 404 Recurso não encontrado
 * 
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {put} /companies_contacts/{id} Altera contatos.
 * @apiVersion 1.0.0
 * @apiDescription <span>Contém todas as regras de negócios para que os dados sejam inseridos de forma consistente.</spa>
 * @apiGroup Companies Contacts
 * @apiParam {uuid} id Identificador do registro a ser alterado.
 * @apiParam {json} fields Enviado no corpo da requisição em formato json.
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
 *      message: "Informe o nome do contato."
 *    },{
 *      message: "Informe o tipo de contato."   
 *    }]
 * 
 * @apiErrorExample {json} Not Found
 *    HTTP/1.1 404 Recurso não encontrado
 * 
 * @apiErrorExample {json} Internal Server Error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {delete} /companies_contacts/{id} Excluir contatos.
 * @apiVersion 1.0.0
 * @apiGroup Companies Contacts
 * @apiParam {uuid} id Identificador do registro a ser excluido.
 * @apiSampleRequest off
 * 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 204 
 * OK
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
 * HTTP/1.1 500 
 *  Internal Server Error
 */