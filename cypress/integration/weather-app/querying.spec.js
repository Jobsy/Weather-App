/// <reference types="cypress" />

context("Querying", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("query DOM elements", () => {
    cy.get(".pLoader").should(
      "contain",
      "Add a valid location(s) and hit submit"
    );

    cy.get(".loader").should("contain", "Loading");

    cy.get("div").should("have.class", "mainGroup");
    cy.get("div").should("have.class", "group1");
    cy.get("div").should("have.class", "inputContainer");
    cy.get("div").should("have.class", "input");
    cy.get("div").should("have.class", "inputContainer2");
    cy.get("div").should("have.class", "inputField-shadow");
    cy.get("div").should("have.class", "submitContainer");
    cy.get("div").should("have.class", "group2");

    //  get element's CSS property
    cy.get(".mainGroup").invoke("css", "display").should("equal", "flex");
    cy.get(".input").invoke("css", "position").should("equal", "relative");
  });

  it("query DOM elements within a specific element", () => {
    cy.get(".inputContainer2").within(() => {
      cy.get("input:first").should(
        "have.attr",
        "placeholder",
        "Enter a location(state) or comma separated locations"
      );
      cy.get("input:first").should("have.attr", "type", "text");
    });
    cy.get(".submitContainer").within(() => {
      cy.get("input:first").should("have.attr", "type", "submit");
      cy.get("input:first").should("have.attr", "class", "submit-btn");
    });
  });

  it("query the root DOM element", () => {
    cy.root().should("match", "html");

    cy.get("#root").within(() => {
      cy.root().get("div").should("have.class", "mainGroup");
    });
  });
});
