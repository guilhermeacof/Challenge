/*---------------------------------------------------------
Desafio 2 - Certificado em nova aba

Dado que o usuário já tenha realizado Login
Quando pressionado em My Certificates
Então o sistema deverá exibir a página de meus certificados com as opções abaixo:

	Innovation Management Program
	Design Thinking - Exam
	Business Management Program
	Mini-MBA Program
	Digital Transformation - Exam
	Change Management - Exam
	Economics and International Business - Exam
	Essential Management Skills - Exam
	Marketing and Communications - Exam
	Finance and Accounting - Exam
	Strategy and Operations - Exam
	Human Resource Management - Exam
	Basics of Innovation Management - Exam

E ao selecionar um deles
Então o sistema deverá abrir o PDF em uma nova Aba para permitir o download
---------------------------------------------------------
*/
/// <reference types="cypress"/>

describe('Desafio 2 - Certificado em nova aba', () => {

	Cypress.on('uncaught:exception', (err, runnable) => {
		console.log(err);
		return false;
	})

	it('Desafio 2 - Certificado em nova aba', () => {

		//Acessar a página
		cy.visit('https://www.ibm-institute.com/my-courses/')

		//Preencher email, senha e pressionar o botão login
		cy.get('[id="username"]').type('guilhermeacof@gmail.com')
		cy.get('[id="password"]').type('Qwerty@1')
		cy.get('[name="login"]').click()

		//Validar se está na página de meus cursos
		cy.get('[id="wrapper"]').contains('My Courses')

		//Checar se o menu My Certificates existe e acessa-lo
		cy.get('[title="My certificates"]').click()

		//Validar se a página direcionada é a My certificate
		cy.get('[id="my-account-content"]').contains('My Certificates')

		//Validar se todos os certificados do Roteiro estão presentes e realizar a abertura em uma nova aba em seguida
		cy.get('[class="certificate-list-container"]').contains('Innovation Management Program').click()
		cy.get('[class="certificate-list-container"]').contains('Design Thinking - Exam').click()
		cy.get('[class="certificate-list-container"]').contains('Business Management Program').click()
		cy.get('[class="certificate-list-container"]').contains('Mini-MBA Program').click()
		cy.get('[class="certificate-list-container"]').contains('Digital Transformation - Exam').click()
		cy.get('[class="certificate-list-container"]').contains('Change Management - Exam').click()
		cy.get('[class="certificate-list-container"]').contains('Economics and International Business - Exam').click()
		cy.get('[class="certificate-list-container"]').contains('Essential Management Skills - Exam').click()
		cy.get('[class="certificate-list-container"]').contains('Marketing and Communications - Exam').click()
		cy.get('[class="certificate-list-container"]').contains('Finance and Accounting - Exam').click()
		cy.get('[class="certificate-list-container"]').contains('Strategy and Operations - Exam').click()
		cy.get('[class="certificate-list-container"]').contains('Human Resource Management - Exam').click()
		cy.get('[class="certificate-list-container"]').contains('Basics of Innovation Management - Exam').click()
		


	});

	

});