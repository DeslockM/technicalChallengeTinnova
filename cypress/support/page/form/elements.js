export const ELEMENTS_FORM = {
  inputName: 'input[name="name"]',
  inputEmail: 'input[name="email"]',
  inputCpf: 'input[name="cpf"]',
  inputPhone: 'input[name="phone"]',
  buttonUserAction: (index) => `div[height="40"]:last-child > :nth-child(5) > :nth-child(${index})`,
  buttonConfirmDelete: 'button[class="swal-button swal-button--confirm swal-button--danger"]',
  buttonNotConfirmDelete: 'button[class="swal-button swal-button--cancel"]',
  divLastUser: 'div[height="40"]:last-child',
  divWarning: 'div[class="swal-modal"]'
};
