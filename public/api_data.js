define({ "api": [
  {
    "type": "delete",
    "url": "/companies",
    "title": "Excluir Empresas.",
    "version": "1.0.0",
    "group": "Companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único do registro.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 \n  [{ \n     message: \"Informe um id válido.\"\n  }]",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Recurso não encontrado",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/Companies.js",
    "groupTitle": "Companies",
    "name": "DeleteCompanies"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "Listar Empresas.",
    "version": "1.0.0",
    "description": "<p>Lista e retorna as empresas cadastradas.</p>",
    "group": "Companies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>Retorna um array de objetos com todas as empresas cadastradas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n  [{\n     \"id\": '8b1c7f0a-75c3-41b2-b5a2-12e5c70a2fec',\n     \"datacadastro\": \"2016-02-10T15:46:51.778Z\",\n     \"datamodificado\": \"2016-02-10T15:46:51.778Z\",\n     \"razaosocial\": \"Empresa teste\"\n   },{\n     \"id\": '8b1c7f0a-75c3-41b2-b5a2-235212e5c7',\n     \"razaosocial\": \"Empresa teste II\",\n     \"datacadastro\": \"2016-02-10T15:46:51.778Z\",\n     \"datamodificado\": \"2016-02-10T15:46:51.778Z\",\n     \"razaosocial\": \"Empresa teste\"\n  }]",
          "type": "json"
        },
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 OK \nNo content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Erro na solicitação",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Recurso não encontrado",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/Companies.js",
    "groupTitle": "Companies",
    "name": "GetCompanies",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/backoffice/companies"
      }
    ]
  },
  {
    "type": "post",
    "url": "/companies",
    "title": "Cadastrar empresas.",
    "description": "<p><span>Contém todas as regras de negócios para que os dados sejam inseridos de forma consistente.</span></p>",
    "version": "1.0.0",
    "group": "Companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único do registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "datacadastro",
            "description": "<p>Exibe a data do cadastro.</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "datamodificado",
            "description": "<p>Exibe a data da ultima alteração do registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "80",
            "optional": false,
            "field": "razaosocial",
            "description": "<p>Razão social da empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "nomefantasia",
            "description": "<p>Nome fantasia(apelido) da empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "12",
            "optional": false,
            "field": "inscestadual",
            "description": "<p>Inscrição estadual da empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "12",
            "optional": false,
            "field": "inscmunicipal",
            "description": "<p>Inscrição municipal da empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8",
            "optional": false,
            "field": "cep",
            "description": "<p>Inscrição estadual da empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "80",
            "optional": false,
            "field": "logradouro",
            "description": "<p>Inscrição estadual da empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "14",
            "optional": false,
            "field": "numero",
            "description": "<p>Inscrição estadual da empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "35",
            "optional": false,
            "field": "complemento",
            "description": "<p>Inscrição estadual da empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "bairro",
            "description": "<p>Inscrição estadual da empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "municipio",
            "description": "<p>Inscrição estadual da empresa.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "muncipiocodigo",
            "description": "<p>Inscrição estadual da empresa.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 \n  [{ \n     message: \"Informe um id válido.\"\n   },{\n     message: \"Informe a razão social da empresa.\"\n   },{\n     message: \"Informe o cnpj da empresa.\"   \n     },{\n     message: \"O cnpj informado já se encontra cadastrado no sistema.\"\n   }]",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Recurso não encontrado",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/Companies.js",
    "groupTitle": "Companies",
    "name": "PostCompanies"
  },
  {
    "type": "put",
    "url": "/companies",
    "title": "Alterar Cadastros.",
    "version": "1.0.0",
    "description": "<p><span>Contém todas as regras de negócios para que os dados sejam inseridos de forma consistente.</spa></p>",
    "group": "Companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único do registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "fields",
            "description": "<p>Enviadas no corpo da requisição em formato json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 \n  [{ \n     message: \"Informe um id válido.\"\n   },{\n     message: \"Informe a razão social da empresa.\"\n   },{\n     message: \"Informe o cnpj da empresa.\"   \n  }]",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Recurso não encontrado",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/Companies.js",
    "groupTitle": "Companies",
    "name": "PutCompanies"
  },
  {
    "type": "delete",
    "url": "/companies_contacts/:id",
    "title": "Excluir contatos.",
    "version": "1.0.0",
    "group": "Companies_Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único do registro.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 \nOK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 \n  [{ \n     message: \"Informe um id válido.\"\n  }]",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Recurso não encontrado",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 \n Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/CompanysContacts.js",
    "groupTitle": "Companies_Contacts",
    "name": "DeleteCompanies_contactsId"
  },
  {
    "type": "get",
    "url": "/companies_contacts",
    "title": "Lista contatos.",
    "version": "1.0.0",
    "group": "Companies_Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único de relacionamento.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "body",
            "description": "<p>Lista os contatos das empresas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": '8b1c7f0a-75c3-41b2-b5a2-12e5c70a2fec',\n    \"datamodificado\": \"2016-02-10T15:46:51.778Z\",\n    \"datamodificado\": \"2016-02-10T15:46:51.778Z\",\n    \"nome\": \"Nome do contato.\",\n    \"apelido\": \"Apelido do contato.\",\n    ...\n}]",
          "type": "json"
        },
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 OK No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Erro na solicitação",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Recurso não encontrado",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/CompanysContacts.js",
    "groupTitle": "Companies_Contacts",
    "name": "GetCompanies_contacts"
  },
  {
    "type": "post",
    "url": "/companies_contacts",
    "title": "Cadastrar contatos.",
    "version": "1.0.0",
    "description": "<p><span>Contém todas as regras de negócios para que os dados sejam inseridos de forma consistente.</spa></p>",
    "group": "Companies_Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único de relacionamento.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "fields",
            "description": "<p>Enviados no corpo da request em formato json.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 \n  [{ \n     message: \"Informe um id válido.\"\n   },{\n     message: \"Informe o nome do contato.\"\n   },{\n     message: \"Informe o tipo de contato.\"   \n   }]",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Recurso não encontrado",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/CompanysContacts.js",
    "groupTitle": "Companies_Contacts",
    "name": "PostCompanies_contacts"
  },
  {
    "type": "put",
    "url": "/companies_contacts",
    "title": "Altera contatos.",
    "version": "1.0.0",
    "description": "<p><span>Contém todas as regras de negócios para que os dados sejam inseridos de forma consistente.</spa></p>",
    "group": "Companies_Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único do registro em alteração.</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "fields",
            "description": "<p>Enviado no corpo da requisição em formato json.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 \n  [{ \n     message: \"Informe um id válido.\"\n   },{\n     message: \"Informe o nome do contato.\"\n   },{\n     message: \"Informe o tipo de contato.\"   \n   }]",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Recurso não encontrado",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/CompanysContacts.js",
    "groupTitle": "Companies_Contacts",
    "name": "PutCompanies_contacts"
  },
  {
    "type": "delete",
    "url": "/companies_relation/:id",
    "title": "Remover vinculo.",
    "version": "1.0.0",
    "group": "Companies_Relation_Matriz-Filiais",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único do registro.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 \n  [{ \n     message: \"Informe um id válido.\"\n  }]",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Recurso não encontrado",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/CompanysRelation.js",
    "groupTitle": "Companies_Relation_Matriz-Filiais",
    "name": "DeleteCompanies_relationId"
  },
  {
    "type": "get",
    "url": "/companies_relation/:id",
    "title": "Lista Filiais.",
    "version": "1.0.0",
    "group": "Companies_Relation_Matriz-Filiais",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/backoffice/companies_relation"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único de relacionamento.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "json",
            "description": "<p>Lista todas as filiais vinculadas a uma matriz.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": '8b1c7f0a-75c3-41b2-b5a2-12e5c70a2fec',\n    \"datamodificado\": \"2016-02-10T15:46:51.778Z\",\n    \"datamodificado\": \"2016-02-10T15:46:51.778Z\",\n    \"razaosocial\": \"Razão Social da filial.\",\n    \"cnpj\": \"Cnpj da filial.\",\n    ...\n}]",
          "type": "json"
        },
        {
          "title": "No Content",
          "content": "HTTP/1.1 204 OK \nNo content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 Erro na solicitação",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Recurso não encontrado",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/CompanysRelation.js",
    "groupTitle": "Companies_Relation_Matriz-Filiais",
    "name": "GetCompanies_relationId"
  },
  {
    "type": "post",
    "url": "/companies_relation/:id",
    "title": "Efetua o vinculo.",
    "version": "1.0.0",
    "description": "<p><span>Contém todas as regras de negócios para que os dados sejam inseridos de forma consistente.</spa></p>",
    "group": "Companies_Relation_Matriz-Filiais",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador único de relacionamento.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "fields",
            "description": "<p>Enviados no corpo da request em formato json.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP/1.1 400 \n  [{ \n     message: \"Informe um id válido.\"\n  }]",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/ViewModel/DocsCompanies/CompanysRelation.js",
    "groupTitle": "Companies_Relation_Matriz-Filiais",
    "name": "PostCompanies_relationId"
  }
] });
