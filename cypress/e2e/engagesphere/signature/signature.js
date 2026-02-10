import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I access the app", () => {
  cy.visit("https://engage-sphere.vercel.app/");
});
When("I type {string} in the signature field", (name) => {
  cy.get("#name").type(name);
});

Then(
  "I see a preview of my signature in Italic letters ex.: _{string}_",
  (name) => {
    cy.get('[data-testid="table"] h2', { timeout: 6000 }).contains(
      `Hi ${name}!`
    );
  }
);
