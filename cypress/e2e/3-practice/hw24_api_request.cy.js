/// <reference types="cypress" />

// Завдання 1:
// Напишіть 3 будь-які API тести на один із сайтів за допомогою методу cy.request()

describe('API testing with request', () => {

    it('Request - GET - /users', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const body = response.body;
                expect(body.length).equal(10);
                expect(body[0].email).to.be.equal('Sincere@april.biz');
                expect(body[2].address.street).to.be.equal('Douglas Extension');
            })
    })

    it('Request - GET - /posts', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                cy.wrap(response.body).should('have.length', 100);
                expect(response.body[2].title).to.be.equal('ea molestias quasi exercitationem repellat qui ipsa sit aut');
            })
    })

    it('Request - GET - /comments', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments').its('body').should('have.length', 500);
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments').its('body[0].name').should('equal', 'id labore ex et quam laborum');
    })

    it('Request - POST', () => {
        const newPost = {
            title: 'Story generators are artificial intelligence programs.',
            body: 'bar',
            userId: 1
        };
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost).as('postResponse')
        cy.get('@postResponse').its('body.title').should('equal', newPost.title);
        cy.get('@postResponse').its('body.body').should('equal', newPost.body);
    })
})