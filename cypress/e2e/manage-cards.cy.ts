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
});
