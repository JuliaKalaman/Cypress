/// <reference types="cypress" />

describe('Swag Labs Login Form', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('Positive login test', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })

    it('Wrong username. Negative test 1', () => {
        cy.get('[data-test="username"]').type('false_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Wrong password. Negative test 2', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('false_password');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Empty username field. Negative test 3', () => {
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    })

    it('Empty password field. Negative test 4', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
    })

    it('From negative to Positive login test', () => {
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })
})