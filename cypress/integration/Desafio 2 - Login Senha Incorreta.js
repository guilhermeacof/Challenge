/*1 - Desafio 2 - Login Senha Incorreta

Dado que o usuário acesse a página de login
Quando preencher o e-mail corretamente
E digitar uma senha incorreta
Então o sistema deverá exibir a mensagem de erro "Error: the password you entered for the email address guilhermeacof@gmail.com is incorrect."
*/
/// <reference types="cypress"/>

describe('Desafio 2 - Login Senha Incorreta', () => {

	Cypress.on('uncaught:exception', (err, runnable) => {
		console.log(err);
		return false;
	})

	it('Desafio 2 - Login Senha Incorreta', () => {

		//acessar a pagina
		cy.visit('https://www.ibm-institute.com/my-courses/')

		//digitando email e senha
		cy.get('[id="username"]').type('guilhermeacof@gmail.com')
		cy.get('[id="password"]').type('asd')

		//clicando no botão de login
		cy.get('[name="login"]').click()

		//validar mensagem de erro de email incorreto
		cy.get('[class="message-container container alert-color medium-text-center"]').contains('Error: the password you entered for the email address guilhermeacof@gmail.com is incorrect.')

	});


	
});