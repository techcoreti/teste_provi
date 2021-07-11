const { doGetCompanies, doPostCompany } = require('../../src/Dao/Companies.Dao');

describe('Cadastros de Empresas', () => {

    it('Verifica se a consulta foi efetuada com sucesso, trazendo ou não registros.', async () => {
        const { code } = await doGetCompanies();
        expect( code ).toBe(200 || 204);
    });

    it('Testa se o cadastro foi efetuado com sucesso.', async () => {
        const { code } = await doPostCompany();
        expect(code).toBe(201);
    });

});
