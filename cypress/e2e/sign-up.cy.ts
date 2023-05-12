describe("Sign up flow", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("[name=first_name]").type("Gwen");

    cy.get("[name=last_name]").type("Stefani");
  });

  it("should redirect to success page and display the email submitted", () => {
    cy.get("[name=email]").type("gwen@gmail.com");

    cy.get("[type=submit]").click();

    cy.location("pathname").should("include", "success");

    cy.contains("gwen@gmail.com");
  });

  it("should display the correct error message if email already exists", () => {
    cy.get("[name=email]").type("existing@splitify.com");

    cy.get("button").click();

    cy.contains("Email already exists");
  });
});
