'use strict'
const { configConnBD } = require('../Config');

const Connection = class{
    constructor(){
        this.config = configConnBD;
        this.conn   = undefined;
    }
    async Connection(){
        if(this.conn){
            return await this.conn.connect();
        }

        const { Pool } = require('pg');
                
        // Parâmetriza o pool conexão 
        const pool = new Pool({
            // Parametros paro banco de dados
            host                    : this.config.host,
            port                    : this.config.port,
            user                    : this.config.user,
            password                : this.config.password,
            database                : this.config.database,
            
            // Comportamento do pool
            max                     : 100,
            idleTimeoutMillis       : 8000,
            connectionTimeoutMillis : 5000
    
        });
    
        // conecta e seta o pool a variável
        this.conn = pool;

        // Retorna a conexão pronta para uso
        return await this.conn.connect();
    };

}

module.exports = { Connection };