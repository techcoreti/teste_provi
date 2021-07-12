/**
 * @api {get} /oauth/token Obter token.
 * @apiVersion 1.0.0
 * @apiDescription Recebe um token válido através do usuário e senha informados.
 * @apiGroup Token
 * @apiParam {username} username teste@teste.com.br.
 * @apiParam {password} password 123mudar.
 * @apiSuccess {Object} body Retorna um objeto contendo o token
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *  auth: true,
 *  message: token gerado
 * }
 * 
 * @apiErrorExample {json} Bad Request
 *    HTTP/1.1 401 Não autorizado
 * 
 * @apiErrorExample {json} Not Found
 *    HTTP/1.1 404 Recurso não encontrado
 * 
 * @apiErrorExample {json} Internal Server Error
 *    HTTP/1.1 500 Internal Server Error
 */