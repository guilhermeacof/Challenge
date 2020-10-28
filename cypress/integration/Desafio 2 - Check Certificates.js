/*---------------------------------------------------------
	Desafio 2 - Check Certificates

Dado que o usu�rio j� tenha realizado Login
Quando pressionado em My Certificates
Ent�o o sistema dever� exibir a p�gina de meus certificados com as op��es abaixo:

Innovation Management Program
Design Thinking - Exam
Business Management Program
Mini - MBA Program
Digital Transformation - Exam
Change Management - Exam
Economics and International Business - Exam
Essential Management Skills - Exam
Marketing and Communications - Exam
Finance and Accounting - Exam
Strategy and Operations - Exam
Human Resource Management - Exam
Basics of Innovation Management - Exam
---------------------------------------------------------
*/
/// <reference types="cypress"/>

describe('Desafio 2 - Check Certificates', () => {

	Cypress.on('uncaught:exception', (err, runnable) => {
		console.log(err);
		return false;
	})

	it('Desafio 2 - Check Certificates', () => {

		//Acessar a p�gina
		cy.visit('https://www.ibm-institute.com/my-courses/')

		//Preencher email, senha e pressionar o bot�o login
		cy.get('[id="username"]').type('guilhermeacof@gmail.com')
		cy.get('[id="password"]').type('Qwerty@1')
		cy.get('[name="login"]').click()

		//Validar se est� na p�gina de meus cursos
		cy.get('[id="wrapper"]').contains('My Courses')

		//Checar se o menu My Certificates existe e acessa-lo
		cy.get('[title="My certificates"]').click()

		//Validar se a p�gina direcionada � a My certificate
		cy.get('[id="my-account-content"]').contains('My Certificates')

		//Validar se todos os certificados do Roteiro est�o presentes
		cy.get('[class="certificate-list-container"]').contains('Innovation Management Program')
		cy.get('[class="certificate-list-container"]').contains('Design Thinking - Exam')
		cy.get('[class="certificate-list-container"]').contains('Business Management Program')
		cy.get('[class="certificate-list-container"]').contains('Mini-MBA Program')
		cy.get('[class="certificate-list-container"]').contains('Digital Transformation - Exam')
		cy.get('[class="certificate-list-container"]').contains('Change Management - Exam')
		cy.get('[class="certificate-list-container"]').contains('Economics and International Business - Exam')
		cy.get('[class="certificate-list-container"]').contains('Essential Management Skills - Exam')
		cy.get('[class="certificate-list-container"]').contains('Marketing and Communications - Exam')
		cy.get('[class="certificate-list-container"]').contains('Finance and Accounting - Exam')
		cy.get('[class="certificate-list-container"]').contains('Strategy and Operations - Exam')
		cy.get('[class="certificate-list-container"]').contains('Human Resource Management - Exam')
		cy.get('[class="certificate-list-container"]').contains('Basics of Innovation Management - Exam')
		


	});



});