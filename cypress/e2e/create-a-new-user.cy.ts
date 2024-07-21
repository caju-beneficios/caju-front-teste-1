describe("Create a new user", () => {
  beforeEach(() => {
    cy.exec("yarn run db:reset");
  });

  it("should be able to create a new user", () => {
    cy.visit("http://localhost:3001/#/new-user");

    cy.get("input[name=name]").type("John Doe");
    cy.get("input[name=email]").type("john.doe@email.com");
    cy.get("input[name=document_number]").type("54315012327");
    cy.get("input[name=date]").type("2024-07-19");

    cy.get("button[data-testid=submit-form-button]").click();
  });
});
