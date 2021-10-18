///<reference types="cypress"/>


describe('Listagem', () => {
    it('Quando não houver cadastros, então a listagem deve estar vazia', () => {
        cy.fixture('listagem-sem-itens').then(data=> {
            window.localStorage.setItem('data',JSON.stringify(data))
          })
          //  window.localStorage.setItem('data',JSON.stringify([{"firstName":"Fernanda","lastName":"Tamara","adress":"Guaiba","emailAdress":"tamara@teste.com","radioGender":"n","checks":["Netflix","Dormir"],"selectCountries":"Dinamarca","selectYears":"2001","selectMonths":"Abril","pwd":"Alunos@1908"}]))
        
            cy.visit('https://form-agilizei.netlify.app/listagem.html');

            cy.get('table tbody tr').should('have.length',0);

            //
        
});
it('quando houver um ou mais cadastros, então  a listagem deve exibir cada registro', () => {
  cy.fixture('listagem-com-itens').then(data=> {
    window.localStorage.setItem('data',JSON.stringify(data))
  })
  //  window.localStorage.setItem('data',JSON.stringify([{"firstName":"Fernanda","lastName":"Tamara","adress":"Guaiba","emailAdress":"tamara@teste.com","radioGender":"n","checks":["Netflix","Dormir"],"selectCountries":"Dinamarca","selectYears":"2001","selectMonths":"Abril","pwd":"Alunos@1908"}]))

    cy.visit('https://form-agilizei.netlify.app/listagem.html');
    cy.get('table tbody tr').should('have.length',2);
});
});