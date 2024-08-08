/// <reference types="cypress" />
import LoginPage from '../../support/pom/LoginPage';
import testData from '../../fixtures/credentials.json';

describe('Login Page tests with POM', () => {
    beforeEach(() => {
        LoginPage.open();
    })

    it('Positive login test 1', () => {
        LoginPage.login(testData.userNames.correctUsername, testData.userPasswords.correctPassword);
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })

    it('Wrong password. Negative test 2', () => {
        LoginPage.login(testData.userNames.correctUsername, testData.userPasswords.incorrectPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })
})

