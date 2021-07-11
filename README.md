# Teste Provi
Esta API foi desenvolvida com a intenção de demonstrar um pouco do meu conhecimento como desenvolvedor backend NodeJs, todos os recursos utilizados para o desenvolvimento forma aplicados na sua mais simples forma.
Escolhi entregar um conteudo mais completo e abrangente, utilizando de algumas técnologias que esrão descritas abaixo.

# Tecnologias
NodeJs, Express, PostGres, documentação (ApiDoc), consumo da Api Spotify

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
     
      
