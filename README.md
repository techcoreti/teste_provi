# Teste Provi
Esta API foi desenvolvida com a intenção de demonstrar um pouco do meu conhecimento como desenvolvedor backend NodeJs, todos os recursos utilizados para o desenvolvimento foram aplicados na sua mais simples forma.
Escolhi entregar um conteudo mais completo e abrangente, utilizando de algumas técnologias que serão descritas abaixo.

# Tecnologias
NodeJs, Express, Postgres, documentação (ApiDoc), consumo da Api Spotify

# Descrição
Api foi concebida para ser scalável de forma simples e rápida, foi efetuado a separação dos módulos aplicando a cada um deles a sua respectiva responsabilidade, isto permite que o projeto de cresca de forma simples e rápida .

Permite quie sejam efetuadas correções de forma simples e prática e seguras.

# Visão do projeto
Permite que sejam efetuadas cadastros de empresas, contatos, filiais, funcionários, clientes, consulta ao spotify e gravação dos dados consultados sem duplicação de registros.
  
    Cadastro das empresas.
      1 - Efetua de forma prática e segura o cadastro de uma empresa
      2 - Com a regra de negócio palicada, só efetua cadastros que estejam completos
      3 - Não efetua cadastros de duplicados
      4 - Efetua a validação dos documentos
      5 - Manutenção completa do cadastro (Alteração, exclusão)
      6 - Não permite a exclusão de registro já movimentados

      7 - Cadastros dos contatos:
        1 - Efetua o cadastro do contato informado vinculando o mesmo a uma empresa
        2 - Permite que um mesmo contato pertença a mais de uma empresa, falcilitando a regra matriz - filial
        3 - Manutenção completa do cadastro (Alteração, Exclusão) 

      8 - Cadastros dos funcionário:
        1 - Efetua o cadastro do funcionário informado vinculando o mesmo a uma empresa
        2 - Permite que um mesmo contato pertença a mais de uma empresa, falcilitando a regra matriz - filial
        3 - Manutenção completa do cadastro (Alteração, Exclusão) 

      9 - Cadastros dos clientes:
        1 - Efetua o cadastro do cliente informado vinculando o mesmo a uma empresa
        2 - Permite que um mesmo contato pertença a mais de uma empresa, falcilitando a regra matriz - filial
        3 - Manutenção completa do cadastro (Alteração, Exclusão) 
    
    API - Spotify
      1 - Exemplo simples de consulta a API do spotify, trazendo detalhes de um album conforme o ID informado
      2 - A consulta é efetuada pela API principal, recebendo um id na chamada do recurso, que por sua vez efetua a consulta publica e retorna os dados encontrados.
      3 - Um adendo, no retorno é efetuada a persistencia dos dados com intuito de demonstrar o controle de tempo e execução da consulta, não permitindo a duplicagem do 
          registro na tabela, se o mesmo for persistido com sucesso, é integrado na resposta o ID único utilizado na chave primária, caso o registro já exista na tabela
          é retornado os dados puros encontrados.
     
Foi utilizado o middlewares Cors e Helmet na construção, permitindo aumentar a segurança da aplicação.
Para documentação dos recursos da API, foi utilizado a ferramenta APiDocs para documentação publica da API.

# Distribuição dos módulos e responsabilidades
    loader.js  -- Carrega o servidor express
    Routes     -- Contém todas as rotas aplicadas ao serviço, permite separação por modelos
    Business   -- Contém todas as regra de negócios da API, efetua a validação dos dados, permitindo ou recusando retornando a validação em forma de objeto
    Dao        -- Aqui são tratados todos os métodos que tem atuação ao ambiente externo da API, seja para persistencia dos dados no banco, arquivos, logs ou mesmo para consulta                   de serviços de terceiros
    Config     -- Arquivo responsável por parametrizar a aplicação, controlado pela variavel de ambiente NODE_DEV
    Connection -- Arquivo que efetua a conexão com a base de dados, abrindo um pool de comunicação, esta técnica melhora o desempenho da aplicação uma vez que mantém a conexão
                  aberta por um tempo determinado se não houver consultas, efetua o reaproveitamento da conexão fazendo com que não seja efetuada uma nova conexão com o 
                  banco a cada solicitação. 
    __docs__   -- Templates de documentação, utilizado para documentar publicamente se necessário todos os recursos da API, utiliza da ferramenta ApiDocs.

# Simulação Jwt
    Criado uma função para fornecer u mtoke jwt com base no cadastro, dados fixado para efeito de testes.
    Criado uma função que valida o token para todas as chamadas a API

# Execução do projeto
    Se deseja efetuar um teste antes de montar o ambiente, verifique a documentação
    Endereço de acecsso com ambiente já montado em: http://3.235.160.57:3000/v1/backoffice/<recursos específicos>, vide documentação para obter os recursos.
    
    Para execução do projeto é necessário, ajustar todas as configurações para o seu perfeito funcionamento.
    Antes de rodar o projeto execute npm install na pasta do projeto.
    Se desejar verificar a geração da documentação, instale também o apcote ApiDocs "npm install apidoc -g"
    
    Para gerar a nova documentação se necessário, digite no terminal dentro da pasta do projeto apidoc -i src/ -o public/, será criado uma pasta de nome public
    com a documentação para visualização web.
        
    Instale o Postgres, após a instalação, crie uma banco de dados com o seguinte nome "backoffice", após a criação do banco, restaure o modelo em backup do banco de dados, o
    mesmo se encontra na pasta do projeto e pasta "backupBD", aguarde a restauração.

    Ajuste dos arquivos .env e .env.production conforme o ambiente.    
    1 - Defirnir os parâmetros de acesso ao banco de dados.
    2 - Definir a porta de execução da API.
    3 - Definir o token obtido no spotify
    4 - Definir a senha de geração do token de acesso a API
    5 - Obter o token de acesso a API.
      5.1 - Para que seja obtido o token é necessário consumir o recurso da API http://<endereço_acesso>/v1/oauth/token?username=teste@teste.com.br&pasword=123mudar
      5.2 - Vide documentação em http://3.235.160.57, grupo Token.
    7 - Após obter o token de acesso é necessário informar no header o seguintes dados; chave/valor.
      7.1 Chave: x-access-token
      7.2 Valor: token obtido.
      7.3 O token tem validade de 10 min. para efeitos de teste
      
# Modelo de envio do companie
    {
        "razaosocial": "",
        "nomefantasia": "",
        "cnpj": "",
        "inscestadual": "",
        "inscmunicipal": null,
        "cep": "",
        "logradouro": "",
        "numero": 000,
        "complemento": "",
        "bairro": "",
        "municipio": "",
        "municipiocodigo": 00000,
        "uf": "",
        "ufcodigo": 00,
        "pais": "",
        "paiscodigo": "",
        "email": "",
        "site": null
    }
