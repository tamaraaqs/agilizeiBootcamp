///<reference types="cypress"/>

//https://form-agilizei.netlify.app/index.html

var chance = require('chance');
var chance = new chance();

//estrutura do mocha ->test runner
describe('Cadastro ', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser realizado', () => {
        cy.visit("https://form-agilizei.netlify.app");
        
        //inputs de texto, textarea e email ->type
        cy.get('input[name="firstName"]').type(chance.first());
        cy.get('input[name="lastName"]').type(chance.last());
        cy.get('textarea[name="adress"]').type(chance.address());
        cy.get('input[name="emailAdress"]').type(chance.email());
   
        //input radio ->checkboxes -> check
        cy.get('input[value="n"]').check();
        cy.get('input[type="checkbox"]').check("Netflix");
        cy.get('input[type="checkbox"]').check("Dormir");

        //inputs do tipo combobox / select -> select 
        cy.get('select#countries').select('Dinamarca',{ force : true });
        cy.get('select#years').select('2001',{ force : true });
        cy.get('select#months').select('Abril',{ force : true });
        cy.get('select#days').select('10',{ force : true });

        //input de senha -> type
        cy.get('input[id="firstpassword"]').type('Alunos@1908');
        cy.get('input[id="secondpassword"]').type('Alunos@1908');
        

        //input botão -> click
        cy.contains('Finalizar cadastro').click();


        //espero que a minha aplicação seja direcionada para a a listagem
        //url 
        //deve estar / conter a palavra listagem

        cy.url().should('contain','listagem');
        //input[id="firstpassword"]
        //select#years
        //select#months
        //select#days
        //


        //select#countries
        //input[value="n"]
        //input[name="firstName"]
        //input[name="lastName"]
       // textarea[name="adress"]
       // input[name="emailAdress"]
    });
});