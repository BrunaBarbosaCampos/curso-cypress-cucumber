import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I access the app without any cookies set", () => {
  cy.visit("https://engage-sphere.vercel.app/");
});

When("I see the cookies consent banner", () => {
  cy.clearCookies();
  cy.get(".CookieConsent_banner__UHArL").should("be.visible");
});

When("I click the acept button ", () => {
  cy.get(".Button_buttonContainer__X5AJ-").eq(0).click();
});

Then("the cookies banner is closed", () => {
  cy.get(".CookieConsent_banner__UHArL").should("not.exist");
});

Then("the cookieConsent is set with the value accepted", () => {
  cy.getCookie("cookieConsent")
    .should("exist")
    .its("value")
    .should("eq", "accepted");
});
