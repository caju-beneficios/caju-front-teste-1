describe("Create a new user", () => {
  beforeEach(() => {
    cy.exec("yarn run db:reset");
  });

  it("should be able to manage cards", () => {
    cy.visit("http://localhost:3001/#/dashboard");

    cy.get("div[data-testid=registration-card-ee3e] .approve-button").click();
    cy.get("button[data-testid=confirm-button]").click();

    cy.get(
      "div[data-testid=registration-card-ee3e] .review-again-button"
    ).click();
    cy.get("button[data-testid=confirm-button]").click();

    cy.get("div[data-testid=registration-card-ee3e] .reprove-button").click();
    cy.get("button[data-testid=confirm-button]").click();

    cy.get("div[data-testid=registration-card-ee3e] .delete-button").click();
    cy.get("button[data-testid=confirm-button]").click();
  });

  it("sould be able to search for a user", () => {
    cy.visit("http://localhost:3001/#/dashboard");

    cy.get("div[data-testid=registration-card-3274]").should("exist");

    cy.get("input[type=search]").type("914.000.780-40");

    cy.get("div[data-testid=registration-card-3274]").should("not.exist");

    cy.get("input[type=search]").clear();

    cy.get("div[data-testid=registration-card-3274]").should("exist");
  });
});
