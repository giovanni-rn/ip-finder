/// <reference types="cypress" />

describe("<App />", () => {
  it("cy.hash() - get the current URL hash", () => {
    // https://on.cypress.io/hash
    cy.visit("/");
    cy.hash().should("be.empty");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });
});
