/// <reference types="cypress" />
import LoginPage from '../../support/pom/LoginPage';

describe('Login Page tests with POM', () => {
    beforeEach(() => {
        LoginPage.open();
    })

    it('Positive login test with env from config.js', () => {
        LoginPage.login(Cypress.env('USER_NAME'), Cypress.env('USER_PASSWORD'));
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })

    it('Positive login for problem user with env from env.json', () => {
        LoginPage.login(Cypress.env('USER_NAME2'), Cypress.env('USER_PASSWORD'));
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg');
        cy.url().should('include', 'inventory.html');
    })
})

