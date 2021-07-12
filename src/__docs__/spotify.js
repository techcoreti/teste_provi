/**
 * @api {get} /spotify/albuns/ Listar Albuns.
 * @apiVersion 1.0.0
 * @apiDescription Necessário obter o token de acesso ao spotify. <br />
 *                 https://developer.spotify.com/console/get-album-tracks/?id=&market=&limit=&offset=                 
 * @apiGroup Spotify
 * @apiSuccess {Object} body Retorna um objeto contendo todas as informações do album
 * @apiSampleRequest off
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *   {
    "message": {
        "album_type": "album",
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4tX2TplrkIP4v05BNC903e"
                },
                "href": "https://api.spotify.com/v1/artists/4tX2TplrkIP4v05BNC903e",
                "id": "4tX2TplrkIP4v05BNC903e",
                "name": "Tom Petty and the Heartbreakers",
                "type": "artist",
                "uri": "spotify:artist:4tX2TplrkIP4v05BNC903e"
            }
        ],
        ...
    }
*} 
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