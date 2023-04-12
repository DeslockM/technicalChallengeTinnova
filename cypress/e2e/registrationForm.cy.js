/// <reference types ="cypress"/>
import RegistrationForm from '../support/page/form';
import { USER_DATA, ACTION_BUTTON_INDEX } from '../fixtures/dataUtils';
import { ELEMENTS_FORM } from '../support/page/form/elements';

describe('Person registration form.', () => {
  beforeEach(() => {
    cy.visit('/');
    RegistrationForm.clickFormActionButton('Entrar');
  });

  context('Critical test cases/Smoke testing.', () => {
    it('Test case 01 - Register a person successfully.', () => {
      RegistrationForm.clickFormActionButton('Adicionar');
      RegistrationForm.insertUserData(
        USER_DATA.name,
        USER_DATA.email,
        USER_DATA.cpf,
        USER_DATA.phone,
      );
      RegistrationForm.clickFormActionButton('GUARDAR');
      RegistrationForm.verifyingUserIsAddedOrChanged(USER_DATA.name);
    })

    it('Test case 02 - Consult a successfully registered person.', () => {
      RegistrationForm.clickUserActionButton(ACTION_BUTTON_INDEX.consult);
      RegistrationForm.verifyingUserData();
    });

    it('Test case 03 - Edit a successfully registered person.', () => {
      RegistrationForm.clickUserActionButton(ACTION_BUTTON_INDEX.edit);
      RegistrationForm.insertUserData(
        USER_DATA.name,
        USER_DATA.email,
        USER_DATA.cpf,
        USER_DATA.phone,
      );
      RegistrationForm.clickFormActionButton('ATUALIZAR');
      RegistrationForm.verifyingUserIsAddedOrChanged(USER_DATA.name);
    })

    it('Test case 04 - Delete a registered person successfully.', () => {
      cy.get(ELEMENTS_FORM.divLastUser).find('p').first().then($value => {
        const nameUser = $value.text().split(':')[1];
        RegistrationForm.clickUserActionButton(ACTION_BUTTON_INDEX.delete);
        RegistrationForm.clickConfirmDeleteButton();
        RegistrationForm.clickFormActionButton('Entrar');
        RegistrationForm.verifyingUserNotExist(nameUser);
      });
    })
  });

  context('Alternative/exploratory/negative test cases.', () => {
    it('Test case 01 - Do not register if there is no information provided.', () => {
      RegistrationForm.clickFormActionButton('Adicionar');
      RegistrationForm.clickFormActionButton('GUARDAR');
      RegistrationForm.verifyingWarningVisible();
    });

    it('Test case 02 - Do not register without name filled.', () => {
      RegistrationForm.clickFormActionButton('Adicionar');
      RegistrationForm.insertUserData(
        '',
        USER_DATA.email,
        USER_DATA.cpf,
        USER_DATA.phone,
      );
      RegistrationForm.clickFormActionButton('GUARDAR');
      RegistrationForm.verifyingWarningVisible();
    })

    it('Test case 06 - Person information is not editable.', () => {
      RegistrationForm.clickUserActionButton(ACTION_BUTTON_INDEX.consult);
      RegistrationForm.verifyingDisabledFields();
    });

    it('Test case 07 - Redirects to the listing when clicking "Back".', () => {
      RegistrationForm.clickUserActionButton(ACTION_BUTTON_INDEX.consult);
      RegistrationForm.clickFormActionButton('VOLTAR');
      RegistrationForm.verifyingFormActionButtonVisible('Adicionar');
    });

    it('Test case 08 - Don\'t delete the person if you click "No" on the confirmation.', () => {
      cy.get(ELEMENTS_FORM.divLastUser).find('p').first().then($value => {
        const nameUser = $value.text().split(':')[1];
        RegistrationForm.clickUserActionButton(ACTION_BUTTON_INDEX.delete);
        RegistrationForm.clickNotConfirmDeleteButton();
        RegistrationForm.verifyingUserIsAddedOrChanged(nameUser);
        RegistrationForm.verifyingWarningNotVisible();
      });
    });

    it('Teste case 09 - Clicking exit and redirecting to the home screen.', () => {
      RegistrationForm.clickFormActionButton('Sair');
      RegistrationForm.verifyingFormActionButtonVisible('Entrar');
    });
  });
})
