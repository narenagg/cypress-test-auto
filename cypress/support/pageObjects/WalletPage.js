class WalletPage {
  getCurrencyLabel() {
    return cy.get("input[name='currency_details_item'] + div");
  }

  getCurrencyRadio() {
    return cy.get("input[name='currency_details_item']");
  }

  getCurrencySearch() {
    return cy.get("input[name='currency_name' ][id ='search']");
  }

  getDepositButton() {
    return cy.get("span.moon-arrow_deposit");
  }

  // getDepositModalWindow() {
  //   return cy.get("div.modal-content");
  // }

  getFirstPickerItem() {
    return cy.get("div[data-testid='picker-item']").first();
  }

  getErrorModalWindowHeading() {
    return cy.get("div.modal-content h3");
  }

  getErrorModalWindowClose() {
    return cy.get("div.modal-content span[data-testid='modal-close']");
  }
  getYourBalance() {
    return cy.get("small").contains("Your balance").siblings().filter("h2");
  }

  getProfile() {
    return cy.get("div").contains("Profile");
  }
}
export default WalletPage;
