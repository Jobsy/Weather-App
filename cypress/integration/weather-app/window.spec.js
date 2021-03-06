context("Window", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("get the global window object", () => {
    cy.window().should("have.property", "top");
  });
  it("get the document object", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });
  it("get the title", () => {
    cy.title().should("include", "Weather App");
  });
});
