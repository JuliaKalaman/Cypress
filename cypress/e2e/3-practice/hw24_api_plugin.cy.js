/// <reference types="cypress" />

// Завдання 2:
// Встановіть будь-який плагін для API тестів 
// Напишіть 3 будь-які API тести на один із сайтів за допомогою методу плагіну

it("GET API testing Using Cypress API Plugin", () => {
    cy.api("GET", "https://jsonplaceholder.typicode.com/users").should((response) => {
        expect(response.status).to.eq(200);
    });
});

it("POST API testing Using Cypress API Plugin", () => {
    cy.api("POST", "https://jsonplaceholder.typicode.com/posts", {
        title: 'Some text for this post',
        body: 'bar',
        userId: 1
    }).should((response) => {
        expect(response.status).to.eq(201);
    });
});

it("PUT API testing Using Cypress API Plugin", () => {
    cy.api("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
        id: 1,
        title: 'Some text for method PUT',
        body: 'bar',
        userId: 1,
    }).should((response) => {
        expect(response.status).to.eq(200);
    });
});