/// <reference types="cypress" />
import App from "../../src/App";

describe("<App />", () => {
  it("checks if 'p' tag exists", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);

    // Get the text content of the App component
    cy.get("[data-testid='cypress-text']").should("exist");
  });

  it("checks if IP address contains '.'", () => {
    // cy.visit("http://localhost:5173");
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);

    // Wait for the fetch request to complete
    cy.wait(1000); // Adjust the wait time based on your application's fetch time

    // Get the text content of the App component
    cy.get("[data-testid='cypress-text']")
      .invoke("text")
      .should("include", ".");
  });
});
