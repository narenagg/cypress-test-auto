class LoginPage {
  getEmail() {
    return cy.get("input#client_id");
  }

  getPassword() {
    return cy.get("input#password");
  }

  getLoginButton() {
    return cy.get("button").contains("Log in");
  }

  getGotItButton() {
    return cy.findByText("Got it");
  }
}

export default LoginPage;
