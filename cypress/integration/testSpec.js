import BeneficiaryPage from "../support/pageObjects/BeneficiaryPage";
import LoginPage from "../support/pageObjects/LoginPage";
import WalletPage from "../support/pageObjects/WalletPage";
const walletPage = new WalletPage();

const loginPage = new LoginPage();
const beneficiaryPage = new BeneficiaryPage();

describe("Bitso Challenge Test Suite", function () {
  beforeEach(function () {
    cy.fixture("loginData").then(function (data) {
      cy.visit(Cypress.env("domain_url") + "/login");
      cy.login(data.emailId, data.password);
    });
    cy.fixture("test_data").then(function (data) {
      this.data = data;
    });
  });

  it("Validate Deposit Error Message on All Cryptos", function () {
    walletPage.getDepositButton().should("be.visible");
    for (const property in this.data.currency) {
      let val = this.data.currency[property];

      cy.findByText(val).click();

      walletPage.getDepositButton().click();
      walletPage.getFirstPickerItem().click();
      walletPage
        .getErrorModalWindowHeading()
        .should("include.text", "Oops! Something went wrong");
      walletPage.getErrorModalWindowClose().filter(":visible").click();
    }
  });

  it("Beneficiary Incorrect Pin Error Validation", function () {
    cy.visit("https://stage.bitso.com/r/user/beneficiaries/add");

    const beneficiary = this.data["beneficiary"];
    const fullName =
      beneficiary["firstName"] +
      " " +
      beneficiary["lastName"] +
      " " +
      beneficiary["secondLastName"];

    beneficiaryPage.getFirstName().type(beneficiary["firstName"]);
    beneficiaryPage.getLastName().type(beneficiary["lastName"]);
    beneficiaryPage.getSecondLastName().type(beneficiary["secondLastName"]);

    beneficiaryPage
      .getBirthdayDay()
      .type(beneficiary["dateOfBirth"]["day"] + "{enter}");
    beneficiaryPage
      .getBirthdayMonth()
      .type(beneficiary["dateOfBirth"]["month"] + "{enter}");
    beneficiaryPage
      .getBirthdayYear()
      .type(beneficiary["dateOfBirth"]["year"] + "{enter}");

    beneficiaryPage.getKinship().click();
    cy.findByText(beneficiary["kinship"]).click();

    beneficiaryPage.getBenefitPercentage().type(beneficiary["benefit"]);
    beneficiaryPage.getAddButton().click();
    beneficiaryPage.getConfirmBeneficiary().should("have.text", fullName);

    beneficiaryPage
      .getConfirmKinship()
      .should("have.text", beneficiary["kinship"]);
    beneficiaryPage
      .getConfirmPercentage()
      .should("have.text", beneficiary["benefit"] + "%");
    beneficiaryPage.getTransactionPin().type("A123");
    beneficiaryPage.getConfirmButton().click();

    beneficiaryPage
      .getIncorrectPinError()
      .should("include.text", "Incorrect PIN");
  });
});
