// Login command
Cypress.Commands.add("login", (username, password) => {
    cy.visit("/login");
    cy.get('[formcontrolname="username"]').type(username);
    cy.get('[formcontrolname="password"').type(password);
    cy.get("button[type='submit']").click();
});