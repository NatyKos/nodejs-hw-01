import { PATH_DB } from '../constants/contacts.js';
import { faker } from '@faker-js/faker';
import fs from 'fs/promises';

const createFakeContact = () => ({
  name: faker.person.fullName(),
  phoneNumber: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

const generateContacts = async (number) => {
  let newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    contacts.push(...newContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
