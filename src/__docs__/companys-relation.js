/**
 * @api {get} /companies_relation/:id Lista Filiais.
 * @apiVersion 1.0.0
 * @apiGroup Companies Relation Matriz-Filiais
 * @apiSampleRequest /companies_relation
 * @apiParam {uuid} id Identificador único de relacionamento.
 * @apiSuccess {Object[]} json Lista todas as filiais vinculadas a uma matriz.
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  [{
 *      "id": '8b1c7f0a-75c3-41b2-b5a2-12e5c70a2fec',
 *      "datamodificado": "2016-02-10T15:46:51.778Z",
 *      "datamodificado": "2016-02-10T15:46:51.778Z",
 *      "razaosocial": "Razão Social da filial.",
 *      "cnpj": "Cnpj da filial.",
 *      ...
 *  }]
 * 
 * @apiSuccessExample {json} No Content
 * HTTP/1.1 204 OK 
 * No content
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
 * @api {post} /companies_relation/:id Efetua o vinculo.
 * @apiVersion 1.0.0
 * @apiDescription <span>Contém todas as regras de negócios para que os dados sejam inseridos de forma consistente.</spa>
 * @apiGroup Companies Relation Matriz-Filiais
 * @apiParam {uuid} id Identificador único de relacionamento.
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
 *   }]
 * 
 * @apiErrorExample {json} Not Found
 * HTTP/1.1 404 Not found
 * 
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {delete} /companies_relation/:id Remover vinculo.
 * @apiVersion 1.0.0
 * @apiGroup Companies Relation Matriz-Filiais
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


