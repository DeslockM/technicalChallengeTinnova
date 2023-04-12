/// <reference types ="cypress"/>
import { ELEMENTS_FORM } from './elements';

class RegistrationForm {
  insertUserData(name, email, cpf, phone) {
    if (name) {
      cy.get(ELEMENTS_FORM.inputName).clear().type(name);
    }
    cy.get(ELEMENTS_FORM.inputEmail).clear().type(email);
    cy.get(ELEMENTS_FORM.inputCpf).clear().type(cpf);
    cy.get(ELEMENTS_FORM.inputPhone).clear().type(phone);
  }

  clickFormActionButton(typeButton) {
    cy.get('div').contains(typeButton).click();
  }

  clickUserActionButton(index) {
    cy.get(ELEMENTS_FORM.buttonUserAction(index)).click();
  }

  clickConfirmDeleteButton() {
    cy.get(ELEMENTS_FORM.buttonConfirmDelete).click();
  }

  clickNotConfirmDeleteButton() {
    cy.get(ELEMENTS_FORM.buttonNotConfirmDelete).click();
  }

  verifyingUserIsAddedOrChanged(name) {
    cy.get('p').contains(name).should('be.visible');
  }

  verifyingUserNotExist(name) {
    cy.get('p').contains(name).should('not.exist');
  }

  verifyingUserData() {
    cy.get(ELEMENTS_FORM.inputName)
      .invoke('val')
      .should('not.be.empty');
    cy.get(ELEMENTS_FORM.inputEmail)
      .invoke('val')
      .should('not.be.empty');
    cy.get(ELEMENTS_FORM.inputCpf)
      .invoke('val')
      .should('not.be.empty');
    cy.get(ELEMENTS_FORM.inputPhone)
      .invoke('val')
      .should('not.be.empty');
  }

  verifyingDisabledFields() {
    cy.get(ELEMENTS_FORM.inputName)
      .should('be.disabled')
    cy.get(ELEMENTS_FORM.inputEmail)
      .should('be.disabled')
    cy.get(ELEMENTS_FORM.inputCpf)
      .should('be.disabled')
    cy.get(ELEMENTS_FORM.inputPhone)
      .should('be.disabled')
  }

  verifyingWarningVisible() {
    cy.get(ELEMENTS_FORM.divWarning).should('be.visible');
  }

  verifyingWarningNotVisible() {
    cy.get(ELEMENTS_FORM.divWarning).should('not.be.visible');
  }

  verifyingFormActionButtonVisible(typeButton) {
    cy.get('div').contains(typeButton).should('be.visible');
  }
}

export default new RegistrationForm();
