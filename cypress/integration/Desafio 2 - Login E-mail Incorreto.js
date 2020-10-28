/*1 - Desafio 2 - Realizar Login Erros

Dado que o usuário acesse a página de login
Quando preencher o e - mail incorretamente
E digitar uma senha
Então o sistema deverá exibir a mensagem de erro "Unknown email address. Check again or try your username."
*/
/// <reference types="cypress"/>

describe('1 - Desafio 2 - Login E-mail Incorreto', () => {

	Cypress.on('uncaught:exception', (err, runnable) => {
		console.log(err);
		return false;
	})

	it('1 - Desafio 2 - Login E-mail Incorreto', () => {

		//Acessar a página
		cy.visit('https://www.ibm-institute.com/my-courses/')

		//digitando email e senha
		cy.get('[id="username"]').type('Goku@Freeza.dbz')
		cy.get('[id="password"]').type('Qwerty@1')

		//clicar no botão de login
		cy.get('[name="login"]').click()

		//Validar mensagem de email incorreto
		cy.get('[class="message-container container alert-color medium-text-center"]').contains('Unknown email address. Check again or try your username.')

	});


	
});