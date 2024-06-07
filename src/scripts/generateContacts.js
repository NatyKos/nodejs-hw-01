import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContacts = [];
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

await generateContacts(2);

// npm run generate
