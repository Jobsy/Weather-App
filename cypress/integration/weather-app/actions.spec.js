/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("click on a DOM element", () => {
    cy.get(".submit-btn").click();

    // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // clicking in the center of the element is the default
    cy.get(".submit-btn").click();

    cy.get(".submit-btn").click("topLeft");
    cy.get(".submit-btn").click("top");
    cy.get(".submit-btn").click("topRight");
    cy.get(".submit-btn").click("left");
    cy.get(".submit-btn").click("right");
    cy.get(".submit-btn").click("bottomLeft");
    cy.get(".submit-btn").click("bottom");
    cy.get(".submit-btn").click("bottomRight");
  });

  it("focus on a DOM element", () => {
    cy.get("#location").focus();
  });

  it("type into a DOM element", () => {
    cy.get("#location")
      .type("Lagos, Accra, London, Paris, Tokyo, New York")
      .should("have.value", "Lagos, Accra, London, Paris, Tokyo, New York");

    cy.get(".submit-btn").click().next();
  });
});
