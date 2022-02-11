class BeneficiaryPage {
  getFirstName() {
    return cy.get("input#first_name");
  }

  getLastName() {
    return cy.get("input#last_name");
  }

  getSecondLastName() {
    return cy.get("input#second_last_name");
  }

  getBirthdayDay() {
    return cy.get("input#day");
  }

  getBirthdayMonth() {
    return cy.get("input#month");
  }

  getBirthdayYear() {
    return cy.get("input#year");
  }

  getKinship() {
    return cy.get("#relationship").parent();
  }

  getBenefitPercentage() {
    return cy.get("input#percentage");
  }

  getAddButton() {
    return cy.get("button[data-testid='add-beneficiary-button']");
  }

  getConfirmBeneficiary() {
    return cy.get(".modal-content").contains("Beneficiary").siblings().first();
  }

  getConfirmKinship() {
    return cy.get(".modal-content").contains("Kinship").siblings().first();
  }

  getConfirmPercentage() {
    return cy.get(".modal-content").contains("Percentage").siblings().first();
  }

  getTransactionPin() {
    return cy.get("input#pin");
  }

  getConfirmButton() {
    return cy.get("button").contains("Confirm");
  }

  getIncorrectPinError() {
    return cy.get("div[type='error'] div");
  }
}
export default BeneficiaryPage;
