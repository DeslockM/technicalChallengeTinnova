import { faker } from '@faker-js/faker';

export const USER_DATA = {
  name: faker.name.fullName(),
  email: faker.internet.email(),
  cpf: faker.random.numeric(11),
  phone: faker.phone.number('119########')
};

export const ACTION_BUTTON_INDEX = {
  consult: 2,
  edit: 3,
  delete: 4
};
