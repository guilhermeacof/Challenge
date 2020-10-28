/*--------------------------------------------------------
	1 - Desafio 2 - Realizar Login Sucesso

Dado que o usuário realize login em My courses
Quando digitado o email e senha corretamente
Então o sistema deverá exibir a página de My Courses

--------------------------------------------------------*/
/// <reference types="cypress"/>

describe('Desafio 2 - Realizar Login Sucesso', () => {

	Cypress.on('uncaught:exception', (err, runnable) => {
		console.log(err);
		return false;
	})

	it('Desafio 2 - Realizar Login Sucesso', () => {

		//Entrar na página
		cy.visit('https://www.ibm-institute.com/my-courses/')

		//digitando email e senha
		cy.get('[id="username"]').type('guilhermeacof@gmail.com')
		cy.get('[id="password"]').type('Qwerty@1')

		//clica no botão entrar
		cy.get('[name="login"]').click()

		//validar se a página está em meus cursos
		cy.get('[id="wrapper"]').contains('My Courses')

	});


	
});